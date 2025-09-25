import {
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";

interface TaskFormProps {
	onAdd: (title: string, priority: "low" | "medium" | "high") => void;
	id: string;
	isEdit: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd, id, isEdit }) => {
	const [title, setTitle] = useState("");
	const [priority, setPriority] = useState<"low" | "medium" | "high">("low");
	const { tasks } = useSelector((state: RootState) => state.todoReducer);
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (title.trim()) {
			onAdd(title, priority);
			setTitle("");
			setPriority("low");
		}
	};

	useEffect(() => {
		const task = tasks.find((t) => t.id === id);
		if (task) {
			setTitle(task.title);
			setPriority(task.priority);
		}
	}, [id, isEdit, tasks]);

	return (
		<form
			onSubmit={handleSubmit}
			className="flex gap-4 items-center bg-white p-4 rounded-2xl shadow-md"
		>
			<TextField
				label="Công việc mới"
				variant="outlined"
				size="small"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className="flex-1"
			/>
			<FormControl size="small" className="w-36">
				<InputLabel>Ưu tiên</InputLabel>
				<Select
					value={priority}
					onChange={(e) =>
						setPriority(e.target.value as "low" | "medium" | "high")
					}
					label="Ưu tiên"
				>
					<MenuItem value="low">Thấp</MenuItem>
					<MenuItem value="medium">Trung bình</MenuItem>
					<MenuItem value="high">Cao</MenuItem>
				</Select>
			</FormControl>
			<Button type="submit" variant="contained" color="primary">
				Thêm
			</Button>
		</form>
	);
};

export default TaskForm;
