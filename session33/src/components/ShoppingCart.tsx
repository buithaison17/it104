import { useDispatch, useSelector } from "react-redux";
import { ShopItem } from "./ShopItem";
import type { RootState } from "../store/store";
import { CartItem } from "./CartItem";
import { useEffect, useState } from "react";
import type { Product } from "../store/ReducerShop";

interface InputStateType {
	quantityAdd: "" | number;
	quantityEdit: "" | number;
}

export const ShoppingCart = () => {
	const stateShop = useSelector((state: RootState) => state.reducerShop);
	const stateCart = useSelector((state: RootState) => state.reducerCart);
	const dispatch = useDispatch();
	const [inputState, setInputState] = useState<InputStateType>({
		quantityAdd: "",
		quantityEdit: "",
	});
	const [notification, setNotification] = useState({
		add: false,
		delete: false,
	});
	const handleInputAdd = (value: string): void => {
		setInputState({ ...inputState, quantityAdd: Number(value) });
	};
	const addToCart = (product: Product, quantity: number | string): void => {
		if (quantity === "") return;
		dispatch({
			type: "ADD_TO_CART",
			payload: { product: product, quantity: quantity },
		});
		setNotification({ ...notification, add: true });
	};
	const deleteItemCart = (id: number): void => {
		dispatch({ type: "DELETE_CART_ITEM", payload: id });
		setNotification({ ...notification, delete: true });
	};
	useEffect(() => {
		const timer = setTimeout(() => {
			setNotification({ ...notification, add: false, delete: false });
		}, 500);
		return () => clearInterval(timer);
	}, [notification]);
	return (
		<div className="w-[1100px] m-auto flex justify-between p-4 ">
			<div className="w-[45%] rounded-md border border-blue-700">
				<div className="bg-blue-800 text-white px-3 py-1">List Product</div>
				<div className="flex flex-col gap-5 p-4">
					{stateShop.products.map((product) => (
						<ShopItem
							product={product}
							handleInput={handleInputAdd}
							addToCart={() => addToCart(product, inputState.quantityAdd)}
						></ShopItem>
					))}
				</div>
			</div>
			<div className="w-[45%] rounded-md overflow-hidden">
				<div className="border border-red-300 rounded-md">
					<div className="px-3 py-1 bg-red-200 text-red-600">Your Cart</div>
					<div className="px-4 mt-2 w-full">
						<table className="table-auto w-full">
							<thead>
								<tr className="font-medium">
									<td className="p-1 border-b">STT</td>
									<td className="p-1 border-b w-[120px]">Name</td>
									<td className="p-1 border-b">Price</td>
									<td className="p-1 border-b">Quantity</td>
									<td className="p-1 border-b">Actions</td>
								</tr>
							</thead>
							<tbody>
								{stateCart.carts.map((cart, index) => (
									<CartItem
										cart={cart}
										index={index + 1}
										deleteCart={() => deleteItemCart(cart.item.product.id)}
									></CartItem>
								))}
							</tbody>
						</table>
						{stateCart.carts.length == 0 && (
							<div className="font-medium p-2">Empty product in your cart</div>
						)}
						{stateCart.carts.length > 0 && (
							<div className="flex justify-between mt-4 p-3">
								<div>
									There are {stateCart.carts.length} items in your shopping cart
								</div>
								<div className="text-red-500 font-medium">
									{stateCart.carts.reduce((total, cart) => {
										return total + cart.item.quantity * cart.item.product.price;
									}, 0)}
								</div>
							</div>
						)}
					</div>
				</div>
				{notification.add && (
					<div className="px-6 py-3 mt-3 bg-green-100 text-green-500 rounded-md">
						Add to cart successfully
					</div>
				)}
				{notification.delete && (
					<div className="px-6 py-3 mt-3 bg-red-100 text-red-500 rounded-md">
						Delete to cart successfully
					</div>
				)}
			</div>
		</div>
	);
};
