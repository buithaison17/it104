import { Component } from "react";
import "../../styles/lession8.css";
import { products } from "../../product.data";

export default class Exercise7 extends Component {
	render() {
		return (
			<>
				<div className="container">
					<header className="header">
						<div>Trang chủ</div>
						<div>Danh sách sản phẩm</div>
						<div>
							Giỏ hàng <span>(0)</span>
						</div>
					</header>
					<main className="list-produce">
						{products.map((p) => (
							<div key={p.id} className="item">
								<img src={p.img} alt="" />
								<div className="produce-name">{p.name}</div>
								<div className="prodcue-price">
									{p.price.toLocaleString("vi-VN")}
								</div>
								<button className="btn-add-to-cart">Thêm vào giỏ hàng</button>
							</div>
						))}
					</main>
					<div className="cart">
						<h2>Cart</h2>
						<div className="item-group">
							<div className="item">
								<div className="produce-infor">
									<img alt="" />
									<div></div>
								</div>
								<div className="cart-action">
									<div>-</div>
									<div></div>
									<div>+</div>
								</div>
								<div>Xóa</div>
							</div>
						</div>
						<div className="cart-total">0 VND</div>
					</div>
				</div>
			</>
		);
	}
}
