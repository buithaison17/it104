import { Component } from 'react'

interface StateType {
	value: string;
}

export default class Exercise04 extends Component<object, StateType> {
	constructor(props: object){
		super(props);
		this.state = {value: "Rikkei Academy"};
	}
	handleChange = (): void => {
    this.setState({
      value:
        this.state.value === "Rikkei Academy"
          ? "Rikkei Education"
          : "Rikkei Academy",
    });
		console.log(this.state.value);
  };
	shouldComponentUpdate(): boolean {
			return false;
	}
	render() {
		return (
			<>
				<h1>Company: {this.state.value}</h1>
				<button onClick={this.handleChange}>Click me</button>
			</>
		)
	}
}
