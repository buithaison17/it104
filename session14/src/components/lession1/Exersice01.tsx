import { Component } from 'react'

interface StateType {
	value: string;
}

export default class Exersice01 extends Component<object, StateType> {
	constructor(props: object){
		super(props);
		this.state = {value: "Bùi Thái Sơn"};
	}
	render() {
		return (
			<>
				<h1>{this.state.value}</h1>
			</>
		)
	}
}
