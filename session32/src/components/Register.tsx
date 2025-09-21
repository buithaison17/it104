import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import type { User } from "../store/ReducerForm";
import { useNavigate } from "react-router-dom";

export const Register = () => {
	const users = useSelector((state: RootState) => state.ex07);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
	});
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onRegister = (): void => {
		if (!inputState.email.trim() || !inputState.password.trim()) return;
		if (users.users.find((user) => user.email === inputState.email)) return;
		const user: User = {
			email: inputState.email,
			password: inputState.password,
		};
		dispatch({ type: "ADD_USER", payload: user });
		setInputState({ ...inputState, email: "", password: "" });
		navigate("/login");
	};
	return (
		<div className="w-[400px] border m-auto mt-8 p-3">
			<h1 className="text-center text-[25px] font-medium">Đăng kí</h1>
			<input
				name="email"
				value={inputState.email}
				onChange={handleInput}
				type="text"
				placeholder="Nhập email..."
				className="border rounded-md p-1 pl-3 w-full mt-4 hover:border-blue-500"
			/>
			<input
				name="password"
				value={inputState.password}
				onChange={handleInput}
				type="password"
				placeholder="Nhập mật khẩu..."
				className="border rounded-md p-1 pl-3 w-full mt-4 hover:border-blue-500"
			/>
			<button
				onClick={onRegister}
				className="mt-4 bg-blue-600 w-full text-white px-2 py-1 rounded-md"
			>
				Đăng kí
			</button>
		</div>
	);
};
