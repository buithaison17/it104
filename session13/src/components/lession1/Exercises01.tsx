import { Component } from "react";

interface stateType {
  fullName: string;
}

export default class Exercises01 extends Component<object, stateType> {
  constructor(props: object) {
    super(props);
    this.state = { fullName: "Sơn Bùi" };
  }
  render() {
    return <h1>{this.state.fullName}</h1>;
  }
}
