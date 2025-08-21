import { Component } from 'react'
import ChildrenComponent from './ChildrenComponent'

interface Product {
    id: number,
    productName: string,
    price: number,
    quantity: number,
}

export default class ParentComponent extends Component {
  render() {
    const product: Product = {
        id: 1, productName: "Bưởi ba roi", price: 12000, quantity: 6,
    }
    return (
        <ChildrenComponent product = {product}></ChildrenComponent>
    )
  }
}
