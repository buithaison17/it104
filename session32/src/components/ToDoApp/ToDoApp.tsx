import { ToDoItem } from "./ToDoItem";
import "../../styles/ToDoApp.css";
import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import React, { useEffect, useState } from "react";
import { ModalAddEdit } from "./ModalAddEdit";
import type { ToDo } from "../../store/ReducerToDo";
import { useDispatch } from "react-redux";
import { ModalDelete } from "./ModalDelete";

export const ToDoApp = () => {
	const stateToDo = useSelector((state: RootState) => state.ToDoApp);
	const [todosFilterd, setToDoFilterd] = useState(stateToDo.todos);
	const dispatch = useDispatch();
	const [idAction, setIdAction] = useState(-1);
	const [isEdit, setIsEdit] = useState(false);
	const [isOpenModalAddEdit, setIsOpenModallAddEdit] = useState(false);
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [inputState, setInputState] = useState({
		title: "",
		level: -1,
	});
	const [inputLevelFiltered, setInputLevelFiltered] = useState(-1);
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(stateToDo.todos));
		setToDoFilterd(stateToDo.todos);
	}, [stateToDo.todos]);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({
			...inputState,
			[name]: name === "level" ? Number(value) : value,
		});
	};
	const handleFilteredLevel = (
		e: React.ChangeEvent<HTMLSelectElement>
	): void => {
		setInputLevelFiltered(Number(e.target.value));
		setToDoFilterd(stateToDo.todos);
		if (Number(e.target.value) === -1) return;
		const result = stateToDo.todos.filter(
			(todo) => todo.level === Number(e.target.value)
		);
		setToDoFilterd(result);
	};
	const openModalAddEdit = (): void => {
		setIsOpenModallAddEdit(true);
	};
	const closeModalAddEdit = (): void => {
		setIsOpenModallAddEdit(false);
		setInputState({ ...inputState, title: "", level: -1 });
		setIsEdit(false);
	};
	const handleEdit = (id: number): void => {
		openModalAddEdit();
		setIdAction(id);
		setIsEdit(true);
		const todo = stateToDo.todos.find((todo) => todo.id === id);
		if (todo)
			setInputState({ ...inputState, title: todo.title, level: todo.level });
	};
	const openModalDelete = (id: number): void => {
		setIsOpenModalDelete(true);
		setIdAction(id);
	};
	const closeModalDelte = (): void => {
		setIsOpenModalDelete(false);
	};
	const onAdd = (): void => {
		if (!inputState.title.trim() || inputState.level === -1) return;
		if (!isEdit) {
			const todo: ToDo = {
				id: stateToDo.todos.length + 1,
				title: inputState.title.trim(),
				level: inputState.level,
				isDone: false,
			};
			dispatch({ type: "ADD_TODO", payload: todo });
		} else {
			dispatch({
				type: "EDIT_TODO",
				payload: {
					id: idAction,
					title: inputState.title.trim(),
					level: inputState.level,
				},
			});
		}
		closeModalAddEdit();
	};
	const onDelete = (): void => {
		dispatch({ type: "DELETE_TODO", payload: idAction });
		closeModalDelte();
	};
	const onChangeStatus = (id: number): void => {
		dispatch({ type: "TOGGLE_STATUS", payload: id });
	};
	return (
		<div className="w-[700px] m-auto border shadow-md rounded-lg p-4 mt-4">
			<h1 className="text-center text-[25px] font-bold">Danh sách công việc</h1>
			<div className="flex mt-4 justify-end gap-3">
				<select
					onChange={handleFilteredLevel}
					value={inputLevelFiltered}
					className="border border-gray-400 py-1 px-2 rounded-md hover:border-blue-500"
				>
					<option value={-1}>Lọc theo công việc</option>
					<option value={0}>Khẩn cấp</option>
					<option value={1}>Quan trọng</option>
					<option value={2}>Bình thường</option>
					<option value={3}>Không quan trọng</option>
				</select>
				<button
					onClick={openModalAddEdit}
					className="px-3 py-1 bg-blue-500 rounded-md text-white"
				>
					Thêm
				</button>
			</div>
			<div className="mt-4">
				{todosFilterd.map((todo) => (
					<ToDoItem
						key={todo.id}
						todo={todo}
						handleDelete={() => openModalDelete(todo.id)}
						handleChangeStatus={() => onChangeStatus(todo.id)}
						handleEdit={() => handleEdit(todo.id)}
					></ToDoItem>
				))}
			</div>
			<div className="mt-4 flex justify-between">
				<div>
					Số công việc hoàn thành:
					<span className="font-medium">
						{stateToDo.todos.filter((todo) => todo.isDone).length}
					</span>
				</div>
				<div className="flex gap-3">
					<button
						onClick={() => dispatch({ type: "DONE_ALL_TODO" })}
						className="px-3 py-2 bg-blue-500 text-white rounded-md"
					>
						Hoàn thành tất cả
					</button>
					<button
						onClick={() => dispatch({ type: "DELETE_ALL_TODO" })}
						className="px-3 py-2 border border-red-500 text-red-500 rounded-md"
					>
						Xóa tất cả
					</button>
				</div>
			</div>
			{isOpenModalAddEdit && (
				<ModalAddEdit
					input={inputState}
					handleInput={(e) => handleInput(e)}
					closeModal={closeModalAddEdit}
					onAdd={onAdd}
				></ModalAddEdit>
			)}
			{isOpenModalDelete && (
				<ModalDelete
					closeModal={closeModalDelte}
					onDelete={onDelete}
				></ModalDelete>
			)}
		</div>
	);
};
