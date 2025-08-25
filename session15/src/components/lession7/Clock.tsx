import { Component } from "react";

interface StateType {
	times: Date;
}

export default class Clock extends Component<object, StateType> {
	private timmerId: number | null = null;
	constructor(props: object) {
		super(props);
		this.state = { times: new Date() };
	}
	componentDidMount(): void {
		this.timmerId = setInterval(() => {
			this.setState({times: new Date()});
		}, 1000);
	}
	componentWillUnmount(): void {
		if (this.timmerId) {
			clearInterval(this.timmerId);
		}
		this.timmerId = null;
	}
	render() {
		return (
			<>
				<div
					style={{
						height: "300px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<h2>Thời gian hiện tại: {this.state.times.toLocaleTimeString()}</h2>
				</div>
			</>
		);
	}
}
