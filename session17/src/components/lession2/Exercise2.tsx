import { useState } from "react";

export const Exercise2 = () => {
	const [product] = useState({
		id: 1,
		name: "Coca cola",
		price: 1000,
		quantity: 10,
	});
	return (
		<>
			<h1>Thông tin sản phẩm</h1>
			<p>ID: {product.id}</p>
			<p>Name: {product.name}</p>
			<p>Price: {product.price}</p>
			<p>Quantiry: {product.quantity}</p>
		</>
	);
};
