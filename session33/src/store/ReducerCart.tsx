import type { Product } from "./ReducerShop";

export interface Cart {
	item: {
		product: Product;
		quantity: number;
	};
}

interface StateType {
	carts: Cart[];
}

const initialState: StateType = {
	carts: [],
};

type Action =
	| {
			type: "ADD_TO_CART";
			payload: {
				product: Product;
				quantity: number;
			};
	  }
	| { type: "DELETE_CART_ITEM"; payload: number };

export const reducerCart = (
	state: StateType = initialState,
	action: Action
): StateType => {
	switch (action.type) {
		case "ADD_TO_CART": {
			const indexItem = state.carts.findIndex(
				(c) => c.item.product.id === action.payload.product.id
			);
			if (indexItem !== -1) {
				const updateCarts = [...state.carts];
				updateCarts[indexItem] = {
					item: {
						...updateCarts[indexItem].item,
						quantity:
							updateCarts[indexItem].item.quantity + action.payload.quantity,
					},
				};
			}
			return {
				...state,
				carts: [
					...state.carts,
					{
						item: {
							product: action.payload.product,
							quantity: action.payload.quantity,
						},
					},
				],
			};
		}
		case "DELETE_CART_ITEM": {
			return {
				...state,
				carts: state.carts.filter((c) => c.item.product.id !== action.payload),
			};
		}
		default:
			return state;
	}
};
