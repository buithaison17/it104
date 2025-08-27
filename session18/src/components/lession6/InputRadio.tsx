import React, { useReducer } from "react";

interface Action {
	type: "setGender";
	payload: string;
}

const reducer = (gender: string, action: Action): string => {
	switch (action.type) {
		case "setGender":
			return (gender = action.payload);
		default:
			return gender;
	}
};

export const InputRadio = () => {
	const [gender, dispatch] = useReducer(reducer, "");
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({ type: "setGender", payload: e.target.value });
	};
	return (
		<>
			<input type="radio" value="Nam" onChange={handleInput} name="gender" />
			Nam
			<br />
			<input type="radio" value="Nữ" onChange={handleInput} name="gender" />
			Nữ
			<br />
			<input type="radio" value="Khác" onChange={handleInput} name="gender" />
			Khác
			<br />
			<div>Selected gender: {gender}</div>
		</>
	);
};
