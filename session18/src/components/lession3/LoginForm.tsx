import React, { useCallback, useState } from "react";

interface StateType {
	email: string;
	password: string;
}

export const LoginForm = () => {
	const [state, setState] = useState<StateType>({
		email: "",
		password: "",
	});
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	const handleSubmit = useCallback(
		(e: React.FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			console.log("email: ", state.email);
			console.log("password: ", state.password);
			setState({ ...state, email: "", password: "" });
		},
		[state]
	);
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email</label>
			<br />
			<input
				onChange={handleInput}
				type="email"
				value={state.email}
				id="email"
				name="email"
			/>
			<br />
			<label htmlFor="password">Password</label>
			<br />
			<input
				onChange={handleInput}
				type="password"
				value={state.password}
				id="password"
				name="password"
			/>
			<br />
			<button type="submit">Submit</button>
		</form>
	);
};
