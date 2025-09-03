import React, { useState } from "react";
import "../../styles/lession2.css";

interface StateType {
	fullName: string;
	email: string;
}

export const UserProfile = () => {
	const [state, setState] = useState<StateType>({ fullName: "", email: "" });
	const [displayUserInfor, setDisplayUserInfor] = useState(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setState({ ...state, [name]: value });
		setDisplayUserInfor(false);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (state.email.trim() && state.fullName.trim()) {
			setDisplayUserInfor(true);
		}
	};
	return (
		<div className="container">
			<form onSubmit={onSubmit}>
				<h1>Thông tin người dùng</h1>
				<div className="input-group">
					<input
						type="text"
						placeholder="Nhập tên"
						name="fullName"
						onChange={handleChange}
						value={state.fullName}
					/>
					<input
						type="text"
						placeholder="Nhập Email"
						name="email"
						onChange={handleChange}
						value={state.email}
					/>
				</div>
				<button type="submit">Gửi</button>
			</form>
			{displayUserInfor && (
				<div className="user-infor">
					<div>Tên: {state.fullName}</div>
					<div>Email: {state.email}</div>
				</div>
			)}
		</div>
	);
};
