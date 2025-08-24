import React, { Component } from "react";

interface StateType {
  selectedGender: string;
  gender: string;
}

export default class Exercise06 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = { gender: "", selectedGender: "" };
  }
  handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ selectedGender: event.target.value });
  };
  onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState({ gender: this.state.selectedGender });
  };
  render() {
    const { gender, selectedGender } = this.state;
    return (
      <>
        <h2>Giới tính: {gender}</h2>
        <form action="" onSubmit={this.onSubmit}>
          <input
            type="radio"
            value="Nam"
            id="genderMale"
            checked={selectedGender === "Nam"}
            onChange={this.handleInput}
          />
          Nam
          <br />
          <input
            type="radio"
            value="Nữ"
            id="genderMale"
            checked={selectedGender === "Nữ"}
            onChange={this.handleInput}
          />
          Nữ
          <br />
          <input
            type="radio"
            value="Khác"
            id="genderMale"
            checked={selectedGender === "Khác"}
            onChange={this.handleInput}
          />
          Khác
          <br />
          <button type="submit">Submit</button>
        </form>
      </>
    );
  }
}
