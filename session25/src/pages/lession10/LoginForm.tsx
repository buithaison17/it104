import { Button, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Account } from "./RegisterForm";

export const LoginForm = () => {
	const navigate = useNavigate();
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
	});
	const [accounts] = useState<Account[]>(
		JSON.parse(localStorage.getItem("accounts") || "[]")
	);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const account = accounts.find(
			(account) => account.email === inputState.email
		);

		if (!account || account.password !== inputState.password) return;
		console.log(account);

		localStorage.setItem("account", account.email);
		navigate("/home-page");
	};
	return (
		<form
			onSubmit={onSubmit}
			className="w-[500px] p-6 rounded-xl shadow-xl m-auto"
		>
			<h1 className="text-center text-[20px] font-bold">Login Account</h1>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="email">Your Email</label>
				<Input
					value={inputState.email}
					name="email"
					onChange={handleChange}
					type="email"
					id="email"
					placeholder="name@company.com"
				/>
			</div>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="password">Password</label>
				<Input
					value={inputState.password}
					name="password"
					onChange={handleChange}
					type="password"
					id="password"
					placeholder="Place your password"
				/>
			</div>
			<Button htmlType="submit" className="mt-4 w-full" type="primary">
				Login an account
			</Button>
			<div className="mt-5 text-gray-400 text-center hover:cursor-pointer">
				Already have an account?
				<span
					onClick={() => navigate("/register")}
					className="text-gray-600 hover:underline ml-1"
				>
					Register here
				</span>
			</div>
		</form>
	);
};
