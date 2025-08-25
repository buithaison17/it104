import React, { Component } from "react";

interface StateType {
	selected: string;
	progress: string;
}

export default class Exercise04 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = { progress: "", selected: "" };
	}
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({ selected: e.target.value });
	};
	onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		this.setState({ progress: this.state.selected });
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
					<h2>
						Tiến độ: {this.state.progress}
						{this.state.progress && "%"}
					</h2>
					<div style={{ display: "flex" }}>
						<input
							onChange={this.handleInput}
							value={this.state.selected}
							style={{ height: "25px" }}
							type="range"
						/>
						<button style={{ height: "28px" }}>Submit</button>
					</div>
				</form>
			</>
		);
	}
}
