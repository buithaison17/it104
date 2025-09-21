import { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const Login = () => {
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
	});
	const stateUsers = useSelector((state: RootState) => state.ex07);
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onLogin = (): void => {
		if (!inputState.email.trim() || !inputState.password.trim()) return;
		const user = stateUsers.users.find(
			(user) => user.email === inputState.email
		);
		if (!user) return;
		if (user.password !== inputState.password) return;
		console.log(user);
		setInputState({ ...inputState, email: "", password: "" });
	};
	return (
		<div className="w-[400px] border m-auto mt-8 p-3">
			<h1 className="text-center text-[25px] font-medium">Đăng nhập</h1>
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
				onClick={onLogin}
				className="mt-4 bg-blue-600 w-full text-white px-2 py-1 rounded-md"
			>
				Đăng nhập
			</button>
		</div>
	);
};
