import { Component } from "react";

interface stateType {
  id: number;
  fullName: string;
  birthday: string;
  address: string;
}

export default class Exercise02 extends Component<object, stateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      id: 1,
      fullName: "Bùi Thái Sơn",
      birthday: "17/01/2006",
      address: "Hà Nội, Việt Nam",
    };
  }
  render() {
    return (
      <>
        <h1>Thông tin cá nhân</h1>
        <p>ID: {this.state.id}</p>
        <p>Tên: {this.state.fullName}</p>
        <p>Ngày sinh: {this.state.birthday}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </>
    );
  }
}
