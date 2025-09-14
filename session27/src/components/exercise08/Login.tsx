import { Button, Input } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { User } from "./Register";

export const Login = () => {
	const [accounts] = useState<User[]>(
		JSON.parse(localStorage.getItem("accounts") || "[]")
	);
	const navigate = useNavigate();
	const [inputState, setInputState] = useState({ email: "", password: "" });
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!inputState.email.trim() || !inputState.password.trim()) return;
		if (!inputState.email.includes("@")) return;
		const account = accounts.find((acc) => acc.email === inputState.email);
		if (!account || account.password !== inputState.password) return;
		alert("Đăng nhập thành công");
	};
	return (
		<form
			onSubmit={onSubmit}
			className="rounded-xl shadow-[rgba(0,0,0,0.24)_0px_3px_8px] m-auto w-fit p-6 mt-5"
		>
			<h1 className="text-[25px] font-bold text-center">Login account</h1>
			<div className="mt-3 flex flex-col gap-1">
				<label htmlFor="email">Email</label>
				<Input
					name="email"
					value={inputState.email}
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
					name="password"
					value={inputState.password}
					onChange={handleChange}
					placeholder="Place your password"
					id="password"
					className="w-[400px]"
					type="password"
				/>
			</div>
			<Button htmlType="submit" className="mt-5 w-full" type="primary">
				Login an account
			</Button>
			<div className="mt-5 text-center text-gray-500 hover:cursor-default">
				Already have an account?{" "}
				<span
					onClick={() => navigate("/register")}
					className="text-gray-950 hover:underline"
				>
					Register here
				</span>
			</div>
		</form>
	);
};
