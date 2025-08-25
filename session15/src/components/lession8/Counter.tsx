import { Component } from "react";

interface StateType {
	count: number;
}

export default class Counter extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = { count: 0 };
	}
	componentDidMount(): void {
		this.countUp();
	}
	countUp = (): void => {
		setInterval(() => {
			this.setState({ count: this.state.count + 1 });
			if (this.state.count === 10) {
				this.setState({ count: 0 });
			}
		}, 1000);
	};
	render() {
		const { count } = this.state;
		return (
			<>
				<h1>{count}</h1>
			</>
		);
	}
}
