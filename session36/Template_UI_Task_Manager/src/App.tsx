import FilterControls from "./components/FilterControls";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../store/store";
import {
	addTask,
	deleteTask,
	editTask,
	fetchData,
	toggleTask,
} from "../store/todoReducer";
import { Loading } from "./components/Loading";

export interface Task {
	id: string;
	title: string;
	completed: boolean;
	priority: "low" | "medium" | "high";
}

const App = () => {
	const { tasks, loading } = useSelector(
		(state: RootState) => state.todoReducer
	);
	const dispatch = useDispatch<AppDispatch>();
	const [isEdit, setIsEdit] = useState(false);
	const [idAction, setIdAction] = useState("");
	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const [filters, setFilters] = useState({
		status: "all",
		priority: "all",
		search: "",
	});

	const handleAdd = (title: string, priority: "low" | "medium" | "high") => {
		if (!title.trim()) return;
		if (!isEdit) {
			const task: Task = {
				id: String(tasks.length + 1),
				title: title.trim(),
				priority: priority,
				completed: false,
			};
			dispatch(addTask(task));
		} else {
			const task = tasks.find((t) => (t.id === idAction));
			if (task) {
				const updates: Task = {
					...task,
					title: title.trim(),
					priority: priority,
				};
				dispatch(editTask(updates));
				setIdAction("");
				setIsEdit(false);
			}
		}
	};

	const handleToggle = (id: string) => {
		const task = tasks.find((t) => t.id === id);
		if (task) dispatch(toggleTask(task));
	};

	const handleDelete = (id: string) => {
		dispatch(deleteTask(id));
	};

	const handleEdit = (id: string) => {
		setIsEdit(true);
		setIdAction(id);
	};

	const filteredTasks = tasks.filter((t) => {
		const matchStatus =
			filters.status === "all" ||
			(filters.status === "completed" && t.completed) ||
			(filters.status === "active" && !t.completed);

		const matchPriority =
			filters.priority === "all" || t.priority === filters.priority;

		const matchSearch = t.title
			.toLowerCase()
			.includes(filters.search.toLowerCase());

		return matchStatus && matchPriority && matchSearch;
	});

	return (
		<div className="relative max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
			{loading && <Loading></Loading>}
			<h1 className="text-2xl font-bold mb-6 text-center">📝 Task Manager</h1>
			<TaskForm onAdd={handleAdd} id={idAction} isEdit={isEdit} />
			<FilterControls
				status={filters.status}
				priority={filters.priority}
				search={filters.search}
				onStatusChange={(status) => setFilters({ ...filters, status })}
				onPriorityChange={(priority) => setFilters({ ...filters, priority })}
				onSearchChange={(search) => setFilters({ ...filters, search })}
			/>
			<div>
				{filteredTasks.map((task) => (
					<TaskItem
						key={task.id}
						{...task}
						onToggle={handleToggle}
						onDelete={handleDelete}
						onEdit={handleEdit}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
