import React, { useReducer, useState } from "react";
import "../../styles/lession9.css";
import { reducer } from "./reducer";

export const FormLogin = () => {
	const [state, dispatch] = useReducer(reducer, { email: "", password: "" });
	const [error, setError] = useState({ email: "", password: "" });
	const validate = (): boolean => {
		let isValid = true;
		const newErrors = { email: "", password: "" };
		if (!state.email) {
			newErrors.email = "Email không được để trống";
			isValid = false;
		} else if (!state.email.includes("@")) {
			newErrors.email = "Email không đúng định dạng";
			isValid = false;
		}
		if (!state.password) {
			newErrors.password = "Mật khẩu không được để trống";
			isValid = false;
		} else if (state.password.length < 6) {
			newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự";
			isValid = false;
		}
		setError(newErrors);
		return isValid;
	};
	const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (validate()) {
			alert("Đăng nhập thành công");
			dispatch({ type: "SET_EMAIL", payload: "" });
			dispatch({ type: "SET_PASSWORD", payload: "" });
		}
	};
	const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({ type: "SET_EMAIL", payload: e.target.value });
	};
	const handlePassword = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({ type: "SET_PASSWORD", payload: e.target.value });
	};
	return (
		<div className="container">
			<header>
				<div>Welcome to</div>
				<div>Secure Access Login</div>
				<div>Facical Recognition Access Control System</div>
			</header>
			<form action="" onSubmit={handleLogin}>
				<div className="input-item">
					<label htmlFor="email">Email</label>
					<input
						value={state.email}
						onChange={handleEmail}
						name="email"
						type="text"
						id="email"
					/>
					{error.email && <div className="text-error">{error.email}</div>}
				</div>
				<div className="input-item">
					<label className="" htmlFor="password">
						Password
					</label>
					<input
						value={state.password}
						type="password"
						className=""
						id="password"
						name="password"
						onChange={handlePassword}
					/>
					{error.password && <div className="text-error">{error.password}</div>}
				</div>
				<div className="action-form">
					<div>
						<input type="checkbox" />
						<span>Remember Me</span>
					</div>
					<div>Forgot Password?</div>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};
