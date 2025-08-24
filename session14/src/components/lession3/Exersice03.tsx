import { Component } from "react";

interface StateType {
  value: string;
}

export default class Exersice03 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = { value: "Rikkei Academy" };
  }
  handleChange = (): void => {
    this.setState({
      value:
        this.state.value === "Rikkei Academy"
          ? "Rikkei Education"
          : "Rikkei Academy",
    });
  };
  render() {
    return (
      <>
        <h1>Company: {this.state.value}</h1>
        <button onClick={this.handleChange}>Click me</button>
      </>
    );
  }
}
