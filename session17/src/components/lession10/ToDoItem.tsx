import type React from "react";
import type { ToDoType } from "../lession9/ToDo";

interface Props {
	todo: ToDoType;
	openModalDelete: () => void;
	openEdit: () => void;
	handleStatus: (id: number) => void;
}

export const ToDoItem: React.FC<Props> = ({
	todo,
	openModalDelete,
	handleStatus,
	openEdit,
}) => {
	return (
		<div className="todo-item">
			<input
				onChange={() => handleStatus(todo.id)}
				type="checkbox"
				className="todo-checkbox"
				checked={todo.isDone}
			/>
			<span className={todo.isDone ? "todo-text completed" : "todo-text"}>
				{todo.content}
			</span>
			<div className="todo-actions">
				<button onClick={openEdit} className="edit-btn">
					✏️ Sửa
				</button>
				<button onClick={openModalDelete} className="delete-btn">
					🗑️ Xóa
				</button>
			</div>
		</div>
	);
};
