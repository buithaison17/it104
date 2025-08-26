import type React from "react";
import type { ToDoType } from "../lession9/ToDo";

interface Props {
	todos: ToDoType[];
}

export const ToDoFooter: React.FC<Props> = ({ todos }) => {
	const toDoDone: number = todos.filter((todo) => todo.isDone).length;
	return (
		<div className="footer">
			<div className="task-counter">
				Đã hoàn thành: <span className="counter-number">{toDoDone}</span> /
				<span className="counter-number">{todos.length}</span> công việc
			</div>
		</div>
	);
};
