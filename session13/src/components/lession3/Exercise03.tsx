import { Component } from "react";

interface Users {
  id: number;
  fullName: string;
  age: number;
}

interface stateType {
  users: Users[];
}

export default class Exercise03 extends Component<object, stateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      users: [
        { id: 1, fullName: "John", age: 30 },
        { id: 2, fullName: "Mary", age: 25 },
        { id: 3, fullName: "Jane", age: 20 },
      ],
    };
  }
  render() {
    return (
      <>
        <table>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Age</td>
          </tr>
          {this.state.users.map((user) => (
            <tr key={user.id}>
              <td>ID: {user.id}</td>
              <td>Name: {user.fullName}</td>
              <td>Age: {user.age}</td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}
