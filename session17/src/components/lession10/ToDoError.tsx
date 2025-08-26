import type React from "react";

interface Props {
	content: string;
}

export const ToDoError:React.FC<Props> = ({content}) => {
	return (
		<div className="error-message">{content}</div>
	);
};
