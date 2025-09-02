import { useMemo, useState } from "react";

export const Exercise01 = () => {
	const [cartItems] = useState([
		{ id: 1, name: "Sản phẩm A", price: 100000, quantity: 2 },
		{ id: 2, name: "Sản phẩm B", price: 200000, quantity: 1 },
	]);
	const total = useMemo(() => {
		return cartItems.reduce((total, item) => total + item.price, 0);
	}, [cartItems]);
	return <div>{total.toLocaleString("vi-VN")}</div>;
};
