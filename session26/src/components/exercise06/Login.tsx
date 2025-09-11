import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
	const [account] = useState({
		email: "sonbui@gmail.com",
		password: "1",
	});
	const [inputState, setInputState] = useState({
		email: "",
		password: "",
		role: "",
	});
	const navigate = useNavigate();
	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (
			!inputState.email.trim() ||
			!inputState.password.trim() ||
			!inputState.role
		)
			return;
		if (
			inputState.email !== account.email ||
			inputState.password !== account.password
		)
			return;
		setInputState({ ...inputState, email: "", password: "", role: "" });
		navigate("/account", { replace: true });
	};
	return (
		<form onSubmit={onSubmit}>
			<label htmlFor="email">Email</label>
			<br />
			<input
				value={inputState.email}
				onChange={handleChange}
				type="email"
				name="email"
				id="email"
			/>
			<br />
			<label htmlFor="password">Password</label>
			<br />
			<input
				value={inputState.password}
				onChange={handleChange}
				type="password"
				name="password"
				id="password"
			/>
			<br />
			<select
				value={inputState.role}
				onChange={handleChange}
				name="role"
				id="role"
			>
				<option value="">Chọn quyền</option>
				<option value="Admin">Admin</option>
				<option value="User">User</option>
			</select>
			<br />
			<button type="submit">Đăng nhập</button>
		</form>
	);
};
