import { Component } from 'react'

interface StateType {
	value: string;
}

export default class UpdateState extends Component<object, StateType> {
	constructor(props: object){
		super(props);
		this.state = {value: "Rikkei Academy"}
	}
	handleClick = (): void => {
		this.setState({value: "Rikkei Soft"})
	}
	render() {
		return (
			<>
				<p>{this.state.value}</p>
				<button onClick={this.handleClick}>Click Me</button>
			</>
		)
	}
}
