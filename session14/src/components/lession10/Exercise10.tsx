import React, { Component } from "react";
import "../../styles/lession9.css";

interface Todo {
	id: number;
	content: string;
	isDone: boolean;
	isEdit: boolean;
}

interface StateType {
	todos: Todo[];
	inputToDo: string;
	isError: boolean;
	errorValue: string;
	editContent: string;
}

export default class Exercise10 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = {
			todos: [],
			inputToDo: "",
			isError: false,
			errorValue: "",
			editContent: "",
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
			isEdit: false,
		};
		const updateToDo = [newToDo, ...this.state.todos];
		this.setState({ todos: updateToDo, inputToDo: "" });
	};
	onRemove = (id: number): void => {
		const updateToDo = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({ todos: updateToDo });
	};
	onToggle = (id: number): void => {
		const updateToDo = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
		);
		this.setState({ todos: updateToDo });
	};
	openEdit = (id: number): void => {
		console.log(123);

		const updateToDo = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, isEdit: true } : todo
		);
		const todo = this.state.todos.find((todo) => todo.id === id);
		if (todo) {
			this.setState({ todos: updateToDo, editContent: todo.content });
		}
	};
	onEdit = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ editContent: e.target.value });
	};
	saveEdit = (id: number): void => {
		if (!this.state.editContent) return;
		const todo = this.state.todos.find((todo) => todo.id === id);
		if (todo) {
			if (
				this.state.todos.some(
					(t) => t.content === this.state.editContent && t.id !== todo.id
				)
			)
				return;
		}
		const updateToDo = this.state.todos.map((t) =>
			t.id === id ? { ...t, content: this.state.editContent, isEdit: false } : t
		);
		this.setState({ todos: updateToDo, editContent: "" });
	};
	cancelEdit = (id: number): void => {
		const updateToDo = this.state.todos.map((todo) =>
			todo.id === id ? { ...todo, isEdit: false } : todo
		);
		this.setState({ todos: updateToDo });
	};
	render() {
		const { isError, errorValue, inputToDo, todos, editContent } = this.state;
		const todoDoneLenght: number = todos.filter((todo) => todo.isDone).length;
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
										<button
											onClick={() => this.openEdit(todo.id)}
											className="todo-button"
										>
											Sửa
										</button>
										<button
											onClick={() => this.onRemove(todo.id)}
											className="todo-button"
										>
											Xóa
										</button>
									</div>
									{todo.isEdit && (
										<>
											<div className="modal">
												<div className="overlay">
													<div className="content">
														<div className="modal-header">
															<div>Cập nhật công việc</div>
															<div
																onClick={() => this.cancelEdit(todo.id)}
																className="modal-exit"
															>
																x
															</div>
														</div>
														<div className="modal-main">
															<label htmlFor="name-todo-edit">
																Tên công việc
															</label>
															<input
																value={editContent}
																onChange={this.onEdit}
																className="input-todo"
																type="text"
																id="name-todo-edit"
															/>
														</div>
														<div className="modal-footer">
															<button
																onClick={() => this.cancelEdit(todo.id)}
																className="btn btn-cancel"
															>
																Hủy
															</button>
															<button
																onClick={() => this.saveEdit(todo.id)}
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
				</div>
			</>
		);
	}
}
