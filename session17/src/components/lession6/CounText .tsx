import React, { useState } from "react";

export const CounText = () => {
	const [input, setInput] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
		setInput(e.target.value);
	};
	return (
		<>
			<textarea value={input} onChange={handleChange}></textarea>
			<div>Số kí tự: {input.length}</div>
		</>
	);
};
