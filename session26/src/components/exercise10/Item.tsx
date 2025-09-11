import type React from "react";
import type { Product } from "./ListProduct";
import { useNavigate } from "react-router-dom";

interface Props {
	product: Product;
}

export const Item: React.FC<Props> = ({ product }) => {
	const navigate = useNavigate();
	return (
		<div
			style={{
				border: "1px solid #dadada",
				width: "fit-content",
				padding: "10px",
				height: "fit-content",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: "10px",
			}}
		>
			<img
				src={product.img}
				alt=""
				style={{ width: "150px", height: "180px" }}
			/>
			<div>{product.nameProduct}</div>
			<div>{product.price.toLocaleString("vi-VN")} VND</div>
			<button
				onClick={() => navigate(`/product-detail/${product.id}`)}
				style={{
					padding: "5px 15px",
					borderRadius: "8px",
					borderStyle: "none",
					backgroundColor: "#2563EB",
					color: "white",
				}}
			>
				Xem chi tiết
			</button>
		</div>
	);
};
