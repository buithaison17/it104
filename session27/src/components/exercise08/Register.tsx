import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface User {
	email: string;
	password: string;
}

export const Register = () => {
	const navigate = useNavigate();
	const [accounts, setAccounts] = useState<User[]>(
		JSON.parse(localStorage.getItem("accounts") || "[]")
	);
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (
			!inputState.email.trim() ||
			!inputState.password.trim() ||
			!inputState.confirmPassword
		)
			return;
		if (!inputState.email.includes("@")) return;
		if (accounts.some((acc) => acc.email === inputState.email)) return;
		if (inputState.password !== inputState.confirmPassword) return;
		const user: User = {
			email: inputState.email,
			password: inputState.confirmPassword,
		};
		setAccounts([...accounts, user]);
		setInputState({ email: "", password: "", confirmPassword: "" });
	};
	useEffect(() => {
		localStorage.setItem("accounts", JSON.stringify(accounts));
	}, [accounts]);
	return (
		<form
			onSubmit={onSubmit}
			className="rounded-xl shadow-[rgba(0,0,0,0.24)_0px_3px_8px] w-fit p-6 m-auto mt-5"
		>
			<h1 className="text-[25px] font-bold text-center">Create account</h1>
			<div className="mt-3 flex flex-col gap-1">
				<label htmlFor="email">Email</label>
				<Input
					value={inputState.email}
					name="email"
					onChange={handleChange}
					placeholder="Place your email"
					id="email"
					className="w-[400px]"
					type="email"
				/>
			</div>
			<div className="mt-3 flex flex-col gap-1">
				<label htmlFor="password">Password</label>
				<Input
					value={inputState.password}
					name="password"
					onChange={handleChange}
					placeholder="Place your password"
					id="password"
					className="w-[400px]"
					type="password"
				/>
			</div>
			<div className="mt-3 flex flex-col gap-1">
				<label htmlFor="confirmPassword">Confirm Password</label>
				<Input
					value={inputState.confirmPassword}
					name="confirmPassword"
					onChange={handleChange}
					placeholder="Place your confirm password"
					id="confirmPassword"
					className="w-[400px]"
					type="password"
				/>
			</div>
			<Button htmlType="submit" className="mt-5 w-full" type="primary">
				Create an account
			</Button>
			<div className="mt-5 text-center text-gray-500 hover:cursor-default">
				Already have an account?{" "}
				<span
					onClick={() => navigate("/login")}
					className="text-gray-950 hover:underline"
				>
					Login here
				</span>
			</div>
		</form>
	);
};
