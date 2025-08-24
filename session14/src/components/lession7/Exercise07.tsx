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
	inputFullName: string;
	inputEmail: string;
	inputPassword: string;
	inputPhone: string;
}

export default class Exercise07 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = {
			accounts: JSON.parse(localStorage.getItem("accounts") || "[]"),
			inputEmail: "",
			inputFullName: "",
			inputPassword: "",
			inputPhone: "",
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
		const { inputEmail, inputPassword, inputPhone, inputFullName, accounts } =
			this.state;
		if (
			!inputFullName ||
			!inputEmail ||
			!inputEmail ||
			!inputPassword ||
			this.state.accounts.some((acc) => acc.email === inputEmail.trim())
		)
			return;
		const newAccount: Account = {
			id: accounts.length + 1,
			fullName: inputFullName,
			email: inputEmail,
			password: inputPassword,
			phone: inputPhone,
		};
		const updatedAccounts = [...accounts, newAccount];
		this.setState({
			accounts: updatedAccounts,
			inputEmail: "",
			inputFullName: "",
			inputPassword: "",
			inputPhone: "",
		});
		localStorage.setItem("accounts", JSON.stringify(updatedAccounts));
	};
	render() {
		return (
			<div className="container">
				<h1>Đăng kí tài khoản</h1>
				<form action="" onSubmit={this.onSubmit}>
					<div className="input-group">
						<label htmlFor="studentName">Tên sinh viên</label>
						<input
							value={this.state.inputFullName}
							onChange={this.handleInput}
							type="text"
							name="inputFullName"
							id="studentName"
						/>
					</div>
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
					<div className="input-group">
						<label htmlFor="">Số điện thoại</label>
						<input
							value={this.state.inputPhone}
							onChange={this.handleInput}
							type="tel"
							name="inputPhone"
							id="studentPhone"
						/>
					</div>
					<button type="submit">Đăng kí ngay</button>
				</form>
			</div>
		);
	}
}
