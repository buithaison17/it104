import { Component } from "react";
import "../../styles/lession8.css";
import { products } from "../../product.data";
import type { Product } from "../../product.data";
import ModalDelete from "./ModalDelete";

interface StateType {
	carts: { product: Product; quantity: number }[];
	isOpenCart: boolean;
	idAction: number | "";
}

export default class Exercise9 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = { carts: [], isOpenCart: false, idAction: "" };
	}
	addToCart = (product: Product): void => {
		const exist = this.state.carts.findIndex(
			(cart) => cart.product.id === product.id
		);
		let updateCart;
		if (exist >= 0) {
			updateCart = [...this.state.carts];
			updateCart[exist] = {
				...updateCart[exist],
				quantity: updateCart[exist].quantity + 1,
			};
		} else {
			updateCart = [...this.state.carts, { product, quantity: 1 }];
		}
		this.setState({ carts: updateCart });
	};
	upQuantity = (id: number): void => {
		const update = this.state.carts.map((cart) =>
			cart.product.id === id ? { ...cart, quantity: cart.quantity + 1 } : cart
		);
		this.setState({ carts: update });
	};
	downQuantity = (id: number): void => {
		const update = this.state.carts.map((cart) =>
			cart.product.id === id
				? { ...cart, quantity: Math.max(cart.quantity - 1, 1) }
				: cart
		);
		this.setState({ carts: update });
	};
	removeProduct = (id: number): void => {
		const update = this.state.carts.filter((cart) => cart.product.id !== id);
		this.setState({ carts: update, idAction: "" });
	};
	render() {
		const { carts, isOpenCart, idAction } = this.state;
		return (
			<>
				<div className="container">
					<header className="header">
						<div>Trang chủ</div>
						<div>Danh sách sản phẩm</div>
						<div
							onClick={() =>
								this.setState({ isOpenCart: !this.state.isOpenCart })
							}
						>
							Giỏ hàng <span>({carts.length})</span>
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
								<button
									onClick={() => this.addToCart(p)}
									className="btn-add-to-cart"
								>
									Thêm vào giỏ hàng
								</button>
							</div>
						))}
					</main>
					{isOpenCart && (
						<div className="cart">
							<h2>Cart</h2>
							<div className="item-group">
								{carts.map((cart) => (
									<div key={cart.product.id} className="item">
										<div className="produce-infor">
											<img src={cart.product.img} alt="" />
											<div>{cart.product.name}</div>
										</div>
										<div className="cart-action">
											<div onClick={() => this.downQuantity(cart.product.id)}>
												-
											</div>
											<div>{cart.quantity}</div>
											<div onClick={() => this.upQuantity(cart.product.id)}>
												+
											</div>
										</div>
										<div
											onClick={() =>
												this.setState({ idAction: cart.product.id })
											}
										>
											Xóa
										</div>
									</div>
								))}
							</div>
							<div className="cart-total">
								{carts
									.reduce(
										(total, cart) => total + cart.quantity * cart.product.price,
										0
									)
									.toLocaleString("vi-VN")}
								VND
							</div>
						</div>
					)}
					{idAction && (
						<ModalDelete
							closeModal={() => this.setState({ idAction: "" })}
							onDelete={() => this.removeProduct(idAction)}
						></ModalDelete>
					)}
				</div>
			</>
		);
	}
}
