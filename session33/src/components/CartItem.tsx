import type React from "react";
import type { Cart } from "../store/ReducerCart";

interface PropsType {
	cart: Cart;
	index: number;
	deleteCart: () => void;
}

export const CartItem: React.FC<PropsType> = ({ cart, index, deleteCart }) => {
	return (
		<tr>
			<td className="p-2 border-b">{index}</td>
			<td className="p-2 border-b">{cart.item.product.name}</td>
			<td className="p-2 border-b">{cart.item.product.price}</td>
			<td className="p-2 border-b">{cart.item.quantity}</td>
			<td className="text-[12px] p-2 border-b">
				<button className="mr-2 bg-blue-600 text-white rounded-md px-1">
					Update
				</button>
				<button
					onClick={deleteCart}
					className="mr-2 bg-red-600 text-white rounded-md px-1"
				>
					Delete
				</button>
			</td>
		</tr>
	);
};
