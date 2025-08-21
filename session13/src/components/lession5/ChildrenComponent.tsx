import { Component } from 'react'

interface Product {
    id: number,
    productName: string,
    price: number,
    quantity: number,
}

interface propType {
    product: Product,
}

export default class ChildrenComponent extends Component<propType> {
  render() {
    const {id, productName, price, quantity} = this.props.product;
    return (
      <>
        <p>ID: {id}</p>
        <p>Product Name: {productName}</p>
        <p>Price: {price.toLocaleString("vi-VN")} VND</p>
        <p>Quantity: {quantity}</p>
      </>
    )
  }
}
