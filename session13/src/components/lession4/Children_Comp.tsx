import { Component, type ReactNode } from 'react'

interface propType {
    children: ReactNode
}

export default class Children_Comp extends Component<propType> {
  render() {
    return (
      <p>{this.props.children}</p>
    )
  }
}
