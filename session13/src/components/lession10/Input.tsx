import React, { Component } from 'react'

interface StateType {
	value: string;
}

export default class Input extends Component<object, StateType> {
	constructor(props: object){
		super(props);
		this.state = {value: ""};
	}
	handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
		this.setState({value: event.target.value})
	}
	render() {
		return (
			<>
			<h2>Dữ liệu: {this.state.value}</h2>
			<input value={this.state.value} type="text" onChange={this.handleChange}/>
			</>
		)
	}
}
