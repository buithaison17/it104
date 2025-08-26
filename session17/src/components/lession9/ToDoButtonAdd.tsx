import type React from "react";

interface Props {
	onAdd: () => void;
}

export const ToDoButtonAdd: React.FC<Props> = ({ onAdd }) => {
	return (
		<button onClick={onAdd} className="add-btn">
			➕ Thêm
		</button>
	);
};
