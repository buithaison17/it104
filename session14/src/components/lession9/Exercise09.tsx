import React, { Component } from "react";
import "../../styles/lession9.css";

interface Todo {
	id: number;
	content: string;
	isDone: boolean;
}

interface StateType {
	todos: Todo[];
	inputToDo: string;
	isError: boolean;
	todoRemoveId: number | null;
	errorValue: string;
}

export default class Exercise09 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = {
			todos: [],
			inputToDo: "",
			isError: false,
			errorValue: "",
			todoRemoveId: null,
		};
	}
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ inputToDo: e.target.value });
	};
	onAdd = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!this.state.inputToDo) {
			this.setState({
				isError: true,
				errorValue: "Công việc không được để trống",
			});
			return;
		}
		if (
			this.state.todos.some((todo) => todo.content === this.state.inputToDo)
		) {
			this.setState({ isError: true, errorValue: "Công việc đã tồn tại" });
			return;
		}
		const newToDo: Todo = {
			id: this.state.todos.length + 1,
			content: this.state.inputToDo,
			isDone: false,
		};
		const updateToDo = [newToDo, ...this.state.todos];
		this.setState({ todos: updateToDo, inputToDo: "" });
	};
	saveRemove = (id: number): void => {
		const updateToDo = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: updateToDo, todoRemoveId: null });
	};
	onToggle = (id: number): void => {
		const updateToDo = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
		);
		this.setState({ todos: updateToDo });
	};
	render() {
		const { isError, errorValue, inputToDo, todos, todoRemoveId } = this.state;
		const todoDoneLenght: number = todos.filter((todo) => todo.isDone).length;
		const todoToRemove = todos.find((t) => t.id === todoRemoveId);
		return (
			<>
				<div className="container">
					<h1>Danh sách công việc</h1>
					<form onSubmit={this.onAdd}>
						<input
							value={inputToDo}
							onChange={this.handleInput}
							onClick={() => this.setState({ isError: false, errorValue: "" })}
							className="input-todo"
							type="text"
							placeholder="Nhập tên công việc đầy đủ"
						/>
						<button className="button-add" type="submit">
							Thêm
						</button>
					</form>
					{isError && <div className="todo-error">{errorValue}</div>}
					{todos.length > 0 && (
						<div className="todo-list">
							{todos.map((todo) => (
								<div key={todo.id} className="todo-item">
									<input
										onChange={() => this.onToggle(todo.id)}
										checked={todo.isDone}
										type="checkbox"
										className="todo-toggle-status"
									/>
									<div className="todo-name">{todo.content}</div>
									<div className="todo-item-action">
										<button className="todo-button">Sửa</button>
										<button
											onClick={() =>
												this.setState({
													todoRemoveId: todo.id,
												})
											}
											className="todo-button"
										>
											Xóa
										</button>
									</div>
								</div>
							))}
						</div>
					)}
					{todos.length > 0 && (
						<div className="todo-footer">
							Công việc hoàn thành:{" "}
							<span>
								{todoDoneLenght}/{todos.length}
							</span>
						</div>
					)}
					{this.state.todoRemoveId && (
						<>
							<div className="modal">
								<div
									onClick={() => this.setState({ todoRemoveId: null })}
									className="overlay"
								>
									<div
										onClick={(event: React.MouseEvent<HTMLDivElement>) =>
											event.stopPropagation()
										}
										className="content"
									>
										<div className="modal-header">
											<div>Xác nhận</div>
											<div
												onClick={() => this.setState({ todoRemoveId: null })}
												className="modal-exit"
											>
												x
											</div>
										</div>
										<div className="modal-main">
											Bạn có xác nhận xóa công việc {todoToRemove!.content}{" "}
											không?
										</div>
										<div className="modal-footer">
											<button
												onClick={() => this.setState({ todoRemoveId: null })}
												className="btn btn-cancel"
											>
												Hủy
											</button>
											<button
												onClick={() =>
													this.saveRemove(this.state.todoRemoveId!)
												}
												className="btn btn-agree"
											>
												Đồng ý
											</button>
										</div>
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</>
		);
	}
}
