import React, { Component, type ChangeEvent } from "react";
import "../../styles/lession7.css";

interface Account {
	id: number;
	fullName: string;
	email: string;
	password: string;
	phone: string;
}

interface StateType {
	accounts: Account[];
	inputEmail: string;
	inputPassword: string;
}

export default class Exercise08 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = {
			accounts: JSON.parse(localStorage.getItem("accounts") || "[]"),
			inputEmail: "",
			inputPassword: "",
		};
	}
	handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value,
		} as unknown as Pick<StateType, keyof StateType>);
	};
	onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { inputEmail, inputPassword, accounts } = this.state;
		const user = accounts.find((acc) => acc.email);
		if (!inputEmail.trim() || !inputPassword.trim() || !user) return;
		if (user.password !== inputPassword.trim()) return;
		console.log("Đăng nhập thành công");
		this.setState({inputEmail: "", inputPassword: ""});
	};
	render() {
		return (
			<div className="container">
				<h1>Đăng nhập tài khoản</h1>
				<form action="" onSubmit={this.onSubmit}>
					<div className="input-group">
						<label htmlFor="">Email</label>
						<input
							value={this.state.inputEmail}
							onChange={this.handleInput}
							type="email"
							name="inputEmail"
							id="studentEmail"
						/>
					</div>
					<div className="input-group">
						<label htmlFor="">Mật khẩu</label>
						<input
							value={this.state.inputPassword}
							onChange={this.handleInput}
							type="password"
							name="inputPassword"
							id="studentPassword"
						/>
					</div>
					<button type="submit">Đăng nhập</button>
				</form>
			</div>
		);
	}
}
