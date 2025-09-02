import React, { useState } from "react";
import "../../styles/lession4.css";

export const LoginForm = () => {
	const [state, setState] = useState({ fullName: "", email: "" });
	const [error, setError] = useState({ fullName: "", email: "" });
	const validate = (): boolean => {
		const newError = { fullName: "", email: "" };
		let isValid: boolean = true;
		if (!state.fullName.trim()) {
			newError.fullName = "Tên không được để trống";
			isValid = false;
		}
		if (!state.email.trim()) {
			newError.email = "Email không được để trống";
			isValid = false;
		} else if (!state.email.includes("@")) {
			newError.email = "Email không đúng định dạng";
			isValid = false;
		}
		setError(newError);
		return isValid;
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (validate()) {
			alert("Đăng nhập thành công");
			setState({ ...state, email: "", fullName: "" });
		}
	};
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
	};
	return (
		<div className="container">
			<h1>Đăng kí thông tin</h1>
			<form action="" onSubmit={onSubmit}>
				<div className="input-item">
					<label htmlFor="fullName">Họ tên</label>
					<input
						type="text"
						id="fullName"
						placeholder="Nhập họ và tên..."
						name="fullName"
						value={state.fullName}
						onChange={handleInput}
					/>
					{error.fullName && <div className="text-error">{error.fullName}</div>}
				</div>
				<div className="input-item">
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						placeholder="example@gmail.com"
						name="email"
						value={state.email}
						onChange={handleInput}
					/>
					{error.email && <div className="text-error">{error.email}</div>}
				</div>
				<button type="submit">Gửi</button>
			</form>
		</div>
	);
};
