import React, { useReducer, useState } from "react";
import "../../styles/lession7.css";
import { reducer } from "./reducer";

export const ToDoApp = () => {
	const [todoSate, dispatch] = useReducer(reducer, {
		todos: [],
	});
	const [inputToDo, setInputTodo] = useState("");
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputTodo(e.target.value);
	};
	const onAdd = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		dispatch({ type: "ADD", payload: inputToDo });
		setInputTodo("");
	};
	const handleDelete = (id: number): void => {
		const isConfirm = confirm("Bạn có xác nhận muốn xóa?");
		if (isConfirm) {
			dispatch({ type: "REMOVE", payload: id });
		}
	};
	return (
		<div className="conatiner">
			<form onSubmit={onAdd} className="form-group">
				<input type="text" value={inputToDo} onChange={handleInput} />
				<button>Thêm công việc</button>
			</form>
			<div className="list-group">
				{todoSate.todos.map((todo) => (
					<div key={todo.id} className="item">
						<div>{todo.content}</div>
						<button onClick={() => handleDelete(todo.id)}>Xóa</button>
					</div>
				))}
			</div>
		</div>
	);
};
