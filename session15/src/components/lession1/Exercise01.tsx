import React, { Component } from "react";

interface StateType {
	email: string;
}

export default class Exercise01 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = { email: "" };
	}
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ email: e.target.value });
	};
	onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<>
				<form
					onSubmit={this.onSubmit}
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "300px",
					}}
				>
					<input
						onChange={this.handleInput}
						value={this.state.email}
						style={{ height: "25px", width: "300px" }}
						type="email"
					/>
					<button style={{ height: "28px" }}>Submit</button>
				</form>
			</>
		);
	}
}
