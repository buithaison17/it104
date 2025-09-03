import React, { useReducer } from "react";
import "../../styles/lession8.css";

type Action =
	| { type: "SET_NAME"; payload: string }
	| { type: "SET_EMAIL"; payload: string };

interface StateType {
	fullName: string;
	email: string;
}

const reducer = (state: StateType, action: Action): StateType => {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_NAME":
			return { ...state, fullName: action.payload };
		default:
			return state;
	}
};

export const UserForm = () => {
	const [userForm, dispatch] = useReducer(reducer, {
		fullName: "",
		email: "",
	});
	return (
		<div className="container">
			<div className="title">User Information Form</div>
			<form action="">
				<div className="input-group">
					<label htmlFor="">Tên:</label>
					<input
						type="text"
						value={userForm.fullName}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							dispatch({ type: "SET_NAME", payload: e.target.value })
						}
					/>
				</div>
				<div className="input-group">
					<label htmlFor="">Email:</label>
					<input
						type="email"
						value={userForm.email}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							dispatch({ type: "SET_EMAIL", payload: e.target.value })
						}
					/>
				</div>
			</form>
			<div className="user-infor">
				<div className="title-infor">Thông tin người dùng</div>
				<div>
					<div>
						Tên: {userForm.fullName ? userForm.fullName : "(Chưa nhập)"}
					</div>
					<div>Email: {userForm.email ? userForm.email : "(Chưa nhập)"}</div>
				</div>
			</div>
		</div>
	);
};
