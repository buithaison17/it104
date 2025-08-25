import React, { Component } from "react";

interface StateType {
	color: string;
	selectedColor: string;
}

export default class Exercise02 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = { color: "", selectedColor: "" };
	}
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ selectedColor: e.target.value });
	};
	onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		this.setState({ color: this.state.selectedColor });
	};
	render() {
		const { color } = this.state;
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
					<h1>Color: {color}</h1>
					<div style={{ display: "flex" }}>
						<input
							onChange={this.handleInput}
							style={{ height: "25px", width: "40px" }}
							type="color"
						/>
						<button style={{ height: "28px" }}>Submit</button>
					</div>
				</form>
			</>
		);
	}
}
