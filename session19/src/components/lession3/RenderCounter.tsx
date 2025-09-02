import React, { useRef, useState } from "react";

export const RenderCounter = () => {
	const [inputToDo, setInputToDo] = useState("");
	const renderCount = useRef(0);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputToDo(e.target.value);
		renderCount.current += 1;
	};
	return (
		<>
			<h1>Component Render Counter</h1>
			<input type="text" value={inputToDo} onChange={handleChange} />
			<div>Component đã render: {renderCount.current}</div>
		</>
	);
};
