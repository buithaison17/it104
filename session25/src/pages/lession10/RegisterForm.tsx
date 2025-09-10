import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface Account {
	email: string;
	password: string;
}

export const RegisterForm = () => {
	const navigate = useNavigate();
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [accounts, setAccount] = useState<Account[]>(
		JSON.parse(localStorage.getItem("accounts") || "[]")
	);
	useEffect(() => {
		localStorage.setItem("accounts", JSON.stringify(accounts));
	}, [accounts]);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (
			!inputState.email.trim() ||
			!inputState.password.trim() ||
			!inputState.confirmPassword.trim()
		)
			return;
		if (!inputState.email.indexOf("@")) return;
		if (accounts.some((account) => account.email === inputState.email.trim()))
			return;
		const account: Account = {
			email: inputState.email,
			password: inputState.password,
		};
		setAccount([...accounts, account]);
		setInputState({
			...inputState,
			email: "",
			password: "",
			confirmPassword: "",
		});
		navigate("/login");
	};
	return (
		<form
			onSubmit={onSubmit}
			className="w-[500px] p-6 rounded-xl shadow-xl m-auto"
		>
			<h1 className="text-center text-[20px] font-bold">Register Account</h1>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="email">Your Email</label>
				<Input
					value={inputState.email}
					name="email"
					onChange={handleInput}
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
					onChange={handleInput}
					type="password"
					id="password"
					placeholder="Place your password"
				/>
			</div>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="password">Confirm Password</label>
				<Input
					value={inputState.confirmPassword}
					name="confirmPassword"
					onChange={handleInput}
					type="password"
					id="confirm-password"
					placeholder="Place your confirm password"
				/>
			</div>
			<Button htmlType="submit" className="mt-4 w-full" type="primary">
				Create an account
			</Button>
			<div className="mt-5 text-gray-400 text-center hover:cursor-pointer">
				Already have an account?
				<span
					onClick={() => navigate("/login")}
					className="text-gray-600 ml-1 hover:underline"
				>
					Login here
				</span>
			</div>
		</form>
	);
};
