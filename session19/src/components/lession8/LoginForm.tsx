import React, { useReducer } from "react";
import "../../styles/lession8.css";

interface StateType {
	loading: boolean;
	success: boolean;
	error: boolean;
}

type Action =
	| { type: "LOGIN_START" }
	| { type: "LOGIN_SUCCESS" }
	| { type: "LOGIN_ERROR" };

const reducer = (state: StateType, action: Action): StateType => {
	switch (action.type) {
		case "LOGIN_START":
			return { loading: true, success: false, error: false };
		case "LOGIN_SUCCESS":
			return { loading: false, success: true, error: false };
		case "LOGIN_ERROR":
			return { loading: false, success: false, error: true };
		default:
			return state;
	}
};

export const LoginForm = () => {
	const [state, dispatch] = useReducer(reducer, {
		loading: false,
		success: false,
		error: false,
	});
	const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const feat: number = Math.floor(Math.random() * 3);
		if (feat === 1) {
			dispatch({ type: "LOGIN_SUCCESS" });
		} else if (feat === 2) {
			dispatch({ type: "LOGIN_START" });
		} else {
			dispatch({ type: "LOGIN_ERROR" });
		}
	};
	return (
		<form onSubmit={onSubmit}>
			<h1>Đăng nhập</h1>
			<div className="input-group">
				<label htmlFor="">Tên người dùng</label>
				<input type="text" />
			</div>
			<div className="input-group">
				<label htmlFor="">Mật khẩu</label>
				<input type="text" />
			</div>
			<button>Đăng nhập</button>
			<div className="message">
				{state.loading
					? "Đang đăng nhập"
					: state.success
					? "Đăng nhập thành công"
					: "Đăng nhập thất bại"}
			</div>
		</form>
	);
};
