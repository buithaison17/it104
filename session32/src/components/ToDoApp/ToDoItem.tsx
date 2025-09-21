import type React from "react";
import type { ToDo } from "../../store/ReducerToDo";

interface Props {
	todo: ToDo;
	handleDelete: () => void;
	handleChangeStatus: () => void;
	handleEdit: () => void;
}

export const ToDoItem: React.FC<Props> = ({
	todo,
	handleDelete,
	handleChangeStatus,
	handleEdit,
}) => {
	const convertLevelToText = (level: number): string => {
		switch (level) {
			case 0:
				return "Khẩn cấp";
			case 1:
				return "Quan trọng";
			case 2:
				return "Bình thường";
			case 3:
				return "Không quan trọng";
			default:
				return "";
		}
	};
	const convertLevelToClass = (level: number): string => {
		switch (level) {
			case 0:
				return "bg-red-500 text-white px-2 rounded-2xl";
			case 1:
				return "bg-orange-500 text-white px-2 rounded-2xl";
			case 2:
				return "bg-blue-500 text-white px-2 rounded-2xl";
			case 3:
				return "bg-gray-500 text-white px-2 rounded-2xl";
			default:
				return "";
		}
	};
	return (
		<div className="flex items-center justify-between p-3 border shadow-md rounded-md">
			<div className="flex items-center gap-3">
				<input
					checked={todo.isDone}
					onChange={handleChangeStatus}
					type="checkbox"
				/>
				<div
					className={
						todo.isDone
							? "text-[15px] line-through text-gray-400"
							: "text-[15px]"
					}
				>
					{todo.title}
				</div>
				<div className={convertLevelToClass(todo.level)}>
					{convertLevelToText(todo.level)}
				</div>
			</div>
			<div className="flex gap-3">
				<button
					onClick={handleEdit}
					className="border border-orange-300 px-2 rounded-md text-orange-500"
				>
					Sửa
				</button>
				<button
					onClick={handleDelete}
					className="border border-red-300 px-2 rounded-md text-red-500"
				>
					Xóa
				</button>
			</div>
		</div>
	);
};
