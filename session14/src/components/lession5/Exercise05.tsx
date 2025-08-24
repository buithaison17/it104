import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

interface StateType {
  productCode: string;
  productName: string;
  productPrice: number | "";
  productQuantity: number | "";
}

export default class Exercise05 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      productCode: "",
      productName: "",
      productPrice: "",
      productQuantity: "",
    };
  }
  handleInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]:
        name === "productPrice" || name === "productQuantity"
          ? Math.abs(Number(value))
          : value,
    });
  };
	onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();
		const {productCode, productName, productPrice, productQuantity} = this.state;
		if(!productCode || !productName || !productPrice || !productQuantity) return;
		const newProduct: StateType = {
			productCode, productName, productPrice, productQuantity,
		}
		this.setState({productCode: "", productName: "", productPrice: "", productQuantity: ""});
		console.log(newProduct);
	}
  render() {
    return (
      <>
        <h1 className="text-center">Thêm sản phẩm mới</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="productCode">Mã sản phẩm</label>
            <input
              type="text"
              className="form-control"
              id="productCode"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productName">Tên sản phẩm</label>
            <input
              type="text"
              className="form-control"
              id="productName"
              name="productName"
              value={this.state.productName}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Giá</label>
            <input
              type="number"
              className="form-control"
              id="productPrice"
              name="productPrice"
              value={this.state.productPrice}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="productQuantity">Số lượng</label>
            <input
              type="number"
              className="form-control"
              id="productQuantity"
              name="productQuantity"
              value={this.state.productQuantity}
              onChange={this.handleInput}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Đăng kí
          </button>
        </form>
      </>
    );
  }
}
