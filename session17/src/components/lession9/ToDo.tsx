import { ToDoHeader } from "./ToDoHeader";
import "../../styles/lession9.css";
import { ToDoInput } from "./ToDoInput";
import { ToDoButtonAdd } from "./ToDoButtonAdd";
import { ToDoError } from "./ToDoError";
import { ToDoEmpty } from "./ToDoEmpty";
import { ToDoItem } from "./ToDoItem";
import { ToDoFooter } from "./ToDoFooter";
import React, { useState } from "react";
import { ModalDelete } from "./ModalDelete";

export interface ToDoType {
	id: number;
	content: string;
	isDone: boolean;
}

interface ToDoState {
	todos: ToDoType[];
	inputToDo: string;
	error: string;
	idAction: number | "";
	isDelete: boolean;
}

export const ToDo = () => {
	const [state, setState] = useState<ToDoState>({
		todos: [],
		inputToDo: "",
		error: "",
		idAction: "",
		isDelete: false,
	});
	const { todos, inputToDo, error, idAction, isDelete } = state;
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const onAdd = (): void => {
		if (!inputToDo) {
			setState({ ...state, error: "Công việc không được để trống" });
			return;
		}
		const newToDo: ToDoType = {
			id: todos.length + 1,
			content: inputToDo.trim(),
			isDone: false,
		};
		setState({
			...state,
			todos: [newToDo, ...todos],
			error: "",
			inputToDo: "",
		});
	};
	const onRemove = (): void => {
		setState({
			...state,
			todos: todos.filter((todo) => todo.id !== idAction),
			idAction: "",
			isDelete: false,
		});
	};
	const handleStatus = (id: number): void => {
		setState({
			...state,
			todos: todos.map((todo) =>
				todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
			),
		});
	};
	return (
		<div className="container">
			{/* Header */}
			<ToDoHeader></ToDoHeader>
			{/* Input Section */}
			<div className="input-section">
				<div className="input-group">
					<ToDoInput
						name="inputToDo"
						value={inputToDo}
						handleInput={handleInput}
					></ToDoInput>
					<ToDoButtonAdd onAdd={onAdd}></ToDoButtonAdd>
				</div>
				{error && <ToDoError content={error}></ToDoError>}
			</div>
			{todos.length === 0 ? (
				<ToDoEmpty></ToDoEmpty>
			) : (
				<>
					<div className="todo-list">
						{todos.map((todo) => (
							<ToDoItem
								key={todo.id}
								todo={todo}
								handleStatus={() => handleStatus(todo.id)}
								openModalDelete={() =>
									setState({ ...state, isDelete: true, idAction: todo.id })
								}
							></ToDoItem>
						))}
					</div>
				</>
			)}
			{/* Footer */}
			<ToDoFooter todos={todos}></ToDoFooter>
			{isDelete && (
				<ModalDelete
					onRemove={onRemove}
					closeModalDelete={() =>
						setState({ ...state, idAction: "", isDelete: false })
					}
				></ModalDelete>
			)}
		</div>
	);
};
