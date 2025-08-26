import React, { useState } from "react";
import "../../styles/lession5.css";

export const UserForm = () => {
	const [formState, setFormState] = useState({
		inputEmail: "",
		inputAge: "",
		inputName: "",
		isError: "",
		isLoginSuccess: false,
	});
	const { inputName, inputEmail, inputAge, isError, isLoginSuccess } =
		formState;
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!inputName.trim() || !inputEmail.trim() || !inputAge.trim) {
			setFormState((prev) => ({
				...prev,
				isError: "Không được để trống dữ liệu",
			}));
			return;
		}
		if (!inputEmail.trim().includes("@")) {
			setFormState((prev) => ({
				...prev,
				isError: "Email không hợp lệ",
			}));
			return;
		}
		setFormState((prev) => ({
			...prev,
			isError: "",
			isLoginSuccess: true,
		}));
	};
	const onReset = (): void => {
		setFormState(prev => ({
			...prev,
			inputAge: "",
			inputEmail: "",
			inputName: "",
			isError: "", 
			isLoginSuccess: false,
		}))
	}
	return (
		<>
			<div className="container">
				<h1>Nhập thông tin người dùng</h1>
				<form onSubmit={onSubmit} className="form-group" action="">
					<input
						onChange={handleInput}
						name="inputName"
						value={inputName}
						type="text"
						placeholder="Họ tên"
					/>
					<input
						onChange={handleInput}
						name="inputEmail"
						value={inputEmail}
						type="text"
						placeholder="Email"
					/>
					<input
						onChange={handleInput}
						name="inputAge"
						value={inputAge}
						type="number"
						placeholder="Tuổi"
					/>
					<div className="form-button">
						<button type="submit">Gửi</button>
						<button onClick={onReset} type="reset">Xóa tất cả</button>
					</div>
				</form>
				{isError && <div className="error">{isError}</div>}
				{isLoginSuccess && (
					<div className="login-success">
						<h1>Thông tin đăng nhập</h1>
						<p>Họ tên: {inputName}</p>
						<p>Email: {inputEmail}</p>
						<p>Tuổi: {inputAge}</p>
					</div>
				)}
			</div>
		</>
	);
};
