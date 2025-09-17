import type React from "react";
import type { ToDo } from "./ToDoApp";

interface Props {
	todo: ToDo;
	onDelete: () => void;
	toggleStatus: () => void;
	toggleModalEdit: () => void;
}

export const ToDoItem: React.FC<Props> = ({
	todo,
	onDelete,
	toggleStatus,
	toggleModalEdit,
}) => {
	return (
		<div className="flex justify-between p-2 border-[1px] shadow-md">
			<div className="flex gap-3 items-center">
				<input type="checkbox" checked={todo.isDone} onChange={toggleStatus} />
				<div className={todo.isDone ? "line-through text-gray-500" : ""}>
					{todo.title}
				</div>
			</div>
			<div className="flex items-center gap-3">
				<button onClick={toggleModalEdit}>Sửa</button>
				<button onClick={onDelete}>Xóa</button>
			</div>
		</div>
	);
};
