import React, { useEffect, useState } from "react";
import { Item } from "./Item";
import { useSearchParams } from "react-router-dom";
import { products } from "./datas";

export interface Product {
	id: number;
	img: string;
	nameProduct: string;
	price: number;
}

export const ListProduct = () => {
	const [state] = useState<Product[]>(products);
	const [input, setInput] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();
	const [productsFiltered, setProductsFiltered] = useState<Product[]>([
		...state,
	]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
	};
	const onSearch = (): void => {
		const result = state.filter((product) =>
			product.nameProduct.toLowerCase().includes(input.toLowerCase())
		);
		setProductsFiltered(result);
		setSearchParams({ name: input });
	};
	useEffect(() => {
		const key = searchParams.get("name");

		if (key) {
			setInput(key);
			const result = state.filter((product) =>
				product.nameProduct.toLowerCase().includes(key.toLowerCase())
			);
			setProductsFiltered(result);
		}
	}, [searchParams, state]);
	return (
		<div
			style={{
				width: "1200px",
				margin: "auto",
				padding: "16px",
			}}
		>
			<h1 style={{ textAlign: "center" }}>List Product</h1>
			<div style={{ display: "flex", gap: "10px", justifyContent: "flex-end" }}>
				<input
					value={input}
					onChange={handleChange}
					style={{
						border: "1px solid #dadada",
						width: "350px",
						padding: "5px",
						paddingLeft: "10px",
						borderRadius: "5px",
					}}
					placeholder="Tìm kiếm theo tên"
					type="text"
				/>
				<button
					onClick={onSearch}
					style={{
						backgroundColor: "#2563EB",
						color: "white",
						borderStyle: "none",
						borderRadius: "5px",
					}}
				>
					Tìm kiếm
				</button>
			</div>
			<div
				style={{
					marginTop: "25px",
					display: "grid",
					gridTemplateColumns: "repeat(3, 1fr)",
					gap: "10px",
				}}
			>
				{productsFiltered.map((product) => (
					<Item key={product.id} product={product}></Item>
				))}
			</div>
		</div>
	);
};
