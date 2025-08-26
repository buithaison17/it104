import React, { useState } from "react";

export const Form = () => {
	const [input, setInput] = useState("");
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
	}
	return (
		<>
			<input onChange={handleInput} value={input} type="text" />
			<h1>{input}</h1>
		</>
	);
};
