import React, { useReducer } from "react";

type Action = { type: "setText"; payload: string };

const reducer = (text: string, action: Action): string => {
	switch (action.type) {
		case "setText":
			return (text = action.payload);
		default:
			return text;
	}
};

export const InputText = () => {
	const [text, dispatch] = useReducer(reducer, "");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({ type: "setText", payload: e.target.value });
	};
	return (
		<>
			<h2>{text}</h2>
			<input onChange={handleChange} value={text} type="text" />
		</>
	);
};
