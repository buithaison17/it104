import { Component } from 'react'
import Children_Comp from './Children_Comp'

export default class Parent_Comp extends Component {
  render() {
    const fullName: string = "Bùi Thái Sơn"
    return (
      <>
        <p>Họ và tên bên trong Component cha: {fullName}</p>
        <Children_Comp>Họ và tên bên trong Component con: {fullName}</Children_Comp>
      </>
    )
  }
}
