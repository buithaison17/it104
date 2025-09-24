import React, { useState } from "react";
import "../styles/tailwind.css";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/loginReducer";

export const Exercise08 = () => {
	const [stateInput, setStateInput] = useState({
		email: "",
		password: "",
	});
	const stateUsers = useSelector((state: RootState) => state.loginReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setStateInput({ ...stateInput, [name]: value });
	};
	const onLogin = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!stateInput.email.trim() || !stateInput.password.trim()) return;
		const user: { email: string; password: string } = {
			email: stateInput.email.trim(),
			password: stateInput.password.trim(),
		};
		dispatch(loginUser(user));
		if (stateUsers.currentUser) {
			navigate("/home");
			setStateInput({ ...stateInput, email: "", password: "" });
		}
	};
	return (
		<div>
			<form
				onSubmit={onLogin}
				className="w-[400px] m-auto mt-6 rounded-md shadow p-3"
			>
				<h1 className="text-center text-xl font-medium">LOGIN FORM</h1>
				<div className="flex flex-col gap-1 mt-4">
					<label htmlFor="email">Email:</label>
					<input
						name="email"
						value={stateInput.email}
						onChange={handleInput}
						type="email"
						id="email"
						className="border rounded-md h-[30px] py-3 px-4"
					/>
				</div>
				<div className="flex flex-col gap-1 mt-4">
					<label htmlFor="password">Password</label>
					<input
						name="password"
						value={stateInput.password}
						onChange={handleInput}
						type="password"
						id="password"
						className="border rounded-md h-[30px] py-3 px-4"
					/>
				</div>
				<button
					type="submit"
					className="mt-4 w-full bg-blue-500 rounded-md p-1 text-white"
				>
					Login
				</button>
			</form>
			<div></div>
		</div>
	);
};
