import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

interface IProduct {
	id: number;
	name: string;
	price: number;
	description: string;
}

const products: IProduct[] = [
	{
		id: 1,
		name: "iPhone 15 Pro",
		price: 29990000,
		description: "Điện thoại cao cấp với chip A17 Pro và camera tiên tiến.",
	},
	{
		id: 2,
		name: "Samsung Galaxy S23 Ultra",
		price: 26990000,
		description: "Smartphone flagship của Samsung với camera 200MP.",
	},
	{
		id: 3,
		name: "MacBook Air M2",
		price: 28990000,
		description: "Laptop mỏng nhẹ với chip Apple M2 hiệu năng mạnh mẽ.",
	},
	{
		id: 4,
		name: "Dell XPS 13",
		price: 25990000,
		description: "Laptop siêu mỏng với màn hình InfinityEdge sắc nét.",
	},
	{
		id: 5,
		name: "iPad Pro 12.9",
		price: 31990000,
		description: "Máy tính bảng cao cấp với màn hình Liquid Retina XDR.",
	},
];

export const ProductList = () => {
	const [stateProducts] = useState<IProduct[]>(products);
	const [productsFiltered, setProductFiltered] = useState<IProduct[]>(products);
	const [input, setInput] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	useEffect(() => {
		const keyword = searchParams.get("search");
		if (keyword) {
			setInput(keyword);
			const result = stateProducts.filter((product) =>
				product.name.toLowerCase().includes(input.toLowerCase())
			);
			setProductFiltered(result);
		}
	}, [searchParams, stateProducts, input]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
		setSearchParams({ search: e.target.value });
		const result = stateProducts.filter((product) =>
			product.name.toLowerCase().includes(e.target.value.toLowerCase())
		);
		setProductFiltered(result);
	};
	return (
		<div>
			<input type="text" value={input} onChange={handleChange} />
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "25px",
					marginTop: "20px",
				}}
			>
				{productsFiltered.map((product) => (
					<div key={product.id}>
						<div>ID: {product.id}</div>
						<div>Name: {product.name}</div>
						<div>Price: {product.price.toLocaleString("vi-VN")}</div>
						<div>Description: {product.description}</div>
					</div>
				))}
			</div>
		</div>
	);
};
