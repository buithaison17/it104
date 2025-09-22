import type React from "react";
import type { Product } from "../store/ReducerShop";

interface PropsType {
	product: Product;
	handleInput: (value: string) => void;
	addToCart: () => void;
}

export const ShopItem: React.FC<PropsType> = ({ product, handleInput, addToCart }) => {
	return (
		<div className="flex gap-3">
			<div className="w-[160px] h-[80px]">
				<img
					className="w-full h-full object-cover object-center"
					src={product.img}
					alt={product.name}
				/>
			</div>
			<div className="flex flex-col">
				<div>{product.name}</div>
				<div className="text-[13px] w-[90%]">{product.description}</div>
			</div>
			<div className="flex flex-col justify-between items-center">
				<input
					onChange={(e) => handleInput(e.target.value)}
					name="quantityAdd"
					type="number"
					className="w-[60px] border rounded-md p-1 pl-2"
				/>
				<button onClick={addToCart} className="py-1 px-2 bg-orange-400 text-white rounded-md">
					{`${product.price}USD`}
				</button>
			</div>
		</div>
	);
};
