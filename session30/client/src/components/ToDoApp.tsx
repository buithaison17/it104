import React, { useEffect, useState } from "react";
import { ToDoItem } from "./ToDoItem";
import axios from "axios";
import { ModalEdit } from "./ModalEdit";

export interface ToDo {
	id: string;
	title: string;
	isDone: boolean;
}

type ActiveFilter = "all" | "done" | "pending";

export const ToDoApp = () => {
	const [todos, setTodos] = useState<ToDo[]>([]);
	const [inputState, setInputState] = useState({ inputAdd: "", inputEdit: "" });
	const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");
	const [idAction, setIdAction] = useState("");
	const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
	const fetchData = async () => {
		const response = await axios.get("http://localhost:3000/todos");
		setTodos(response.data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onAdd = async () => {
		if (!inputState.inputAdd.trim()) return;
		const todo = {
			title: inputState.inputAdd.trim(),
			isDone: false,
		};
		await axios.post("http://localhost:3000/todos", todo);
		await fetchData();
		setInputState({ ...inputState, inputAdd: "" });
	};
	const onDelete = async (id: string) => {
		await axios.delete(`http://localhost:3000/todos/${id}`);

		if (activeFilter === "done") {
			setTodos(todos.filter((t) => t.id !== id && t.isDone));
		} else if (activeFilter === "pending") {
			setTodos(todos.filter((t) => t.id !== id && !t.isDone));
		} else {
			setTodos(todos.filter((t) => t.id !== id));
		}
	};
	const toggleStatus = async (id: string) => {
		const todo = todos.find((t) => t.id === id);
		if (todo) todo.isDone = !todo.isDone;
		await axios.put(`http://localhost:3000/todos/${id}`, todo);
		await fetchData();
	};
	const deleteAllDone = async () => {
		const listDone = todos.filter((t) => t.isDone);
		await Promise.all(
			listDone.map((todo) =>
				axios.delete(`http://localhost:3000/todos/${todo.id}`)
			)
		);
		await fetchData();
	};
	const deleteAllTask = async () => {
		await Promise.all(
			todos.map((todo) =>
				axios.delete(`http://localhost:3000/todos/${todo.id}`)
			)
		);
		await fetchData();
	};
	const displayTaskAll = async () => {
		const response = await axios.get("http://localhost:3000/todos");
		setTodos(response.data);
		setActiveFilter("all");
	};
	const displayTaskDone = async () => {
		const response = await axios.get("http://localhost:3000/todos");
		const list = response.data.filter((t: ToDo) => t.isDone);
		setTodos(list);
		setActiveFilter("done");
	};
	const displayTaskPending = async () => {
		const response = await axios.get("http://localhost:3000/todos");
		const list = response.data.filter((t: ToDo) => !t.isDone);
		setTodos(list);
		setActiveFilter("pending");
	};
	const toggleModalEdit = (id: string) => {
		if (isOpenModalEdit) {
			setIsOpenModalEdit(false);
			setIdAction("");
		} else {
			setIsOpenModalEdit(true);
			setIdAction(id);
			const todo = todos.find((t) => t.id === id);
			if (todo) setInputState({ ...inputState, inputEdit: todo.title });
		}
	};
	const onEdit = async () => {
		const todo = todos.find((t) => t.id === idAction);
		if (!todo) return;
		const updatedTodo = { ...todo, title: inputState.inputEdit };
		await axios.put(`http://localhost:3000/todos/${idAction}`, updatedTodo);
		if (activeFilter === "done") {
			setTodos(
				todos
					.map((t) => (t.id === idAction ? updatedTodo : t))
					.filter((t) => t.isDone)
			);
		} else if (activeFilter === "pending") {
			setTodos(
				todos
					.map((t) => (t.id === idAction ? updatedTodo : t))
					.filter((t) => !t.isDone)
			);
		} else {
			setTodos(todos.map((t) => (t.id === idAction ? updatedTodo : t)));
		}
		toggleModalEdit(idAction);
	};
	return (
		<div className="w-[600px] border-[1px] shadow-xl rounded-xl m-auto mt-4 p-4">
			<header className="text-center text-[25px] font-bold">
				Quản lý công việc
			</header>
			<div className="flex flex-col p-4 mt-4 border-[1px] gap-3 shadow-md">
				<input
					onChange={handleInput}
					value={inputState.inputAdd}
					name="inputAdd"
					type="text"
					className="border-[1px] h-[35px] rounded-md p-3 hover:border-blue-500"
					placeholder="Nhập tên công việc"
				/>
				<button
					onClick={onAdd}
					className="px-2 py-1 bg-blue-600 text-white rounded-md"
				>
					Thêm công việc
				</button>
			</div>
			<div className="grid grid-cols-3 gap-3 mt-4 border-[1px] shadow-md p-4">
				<div
					onClick={displayTaskAll}
					className={`px-2 py-1 border-[1px] text-center rounded-md ${
						activeFilter === "all" ? "bg-blue-500 text-white" : ""
					}`}
				>
					Tất cả
				</div>
				<div
					onClick={displayTaskDone}
					className={`px-2 py-1 border-[1px] text-center rounded-md ${
						activeFilter === "done" ? "bg-blue-500 text-white" : ""
					}`}
				>
					Hoàn thành
				</div>
				<div
					onClick={displayTaskPending}
					className={`px-2 py-1 border-[1px] text-center rounded-md ${
						activeFilter === "pending" ? "bg-blue-500 text-white" : ""
					}`}
				>
					Đang thực hiện
				</div>
			</div>
			<div className="flex flex-col mt-4 gap-3">
				{todos.map((todo) => (
					<ToDoItem
						key={todo.id}
						todo={todo}
						onDelete={() => onDelete(todo.id)}
						toggleStatus={() => toggleStatus(todo.id)}
						toggleModalEdit={() => toggleModalEdit(todo.id)}
					></ToDoItem>
				))}
			</div>
			<div className="grid grid-cols-2 gap-3 mt-4">
				<div
					onClick={deleteAllDone}
					className="text-center bg-red-500 px-1 py-2 rounded-md text-white"
				>
					Xóa tất cả công việc hoàn thành
				</div>
				<div
					onClick={deleteAllTask}
					className="text-center bg-red-500 px-1 py-2 rounded-md text-white"
				>
					Xóa tất cả công việc
				</div>
			</div>
			<ModalEdit
				inputEdit={inputState.inputEdit}
				isOpen={isOpenModalEdit}
				toggleModal={() => toggleModalEdit(idAction)}
				onEdit={onEdit}
				handleInput={(e) => handleInput(e)}
			></ModalEdit>
		</div>
	);
};
