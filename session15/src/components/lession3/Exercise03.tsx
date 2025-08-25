import React, { Component } from "react";

interface StateType {
	selectedBirthday: string;
	birthday: string;
}

export default class Exercise03 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = { birthday: "", selectedBirthday: "" };
	}
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ selectedBirthday: e.target.value });
	};
	onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		this.setState({ birthday: this.state.selectedBirthday });
	};
	render() {
		return (
			<>
				<form
					onSubmit={this.onSubmit}
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						height: "300px",
					}}
				>
					<h3>Ngày sinh: {this.state.birthday}</h3>
					<div style={{ display: "flex" }}>
						<input
							onChange={this.handleInput}
							value={this.state.selectedBirthday}
							style={{ height: "25px" }}
							type="date"
						/>
						<button style={{ height: "28px" }}>Submit</button>
					</div>
				</form>
			</>
		);
	}
}
