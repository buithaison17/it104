import type React from "react";

interface Props {
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	value: string;
	name: string;
}

export const ToDoInput: React.FC<Props> = ({handleInput, value, name}) => {
	const getInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		handleInput(e);
	}
	return (
		<input
			name={name}
			type="text"
			className="task-input"
			placeholder="Nhập công việc cần làm..."
			maxLength={100}
			onChange={getInput}
			value={value}
		/>
	);
};
