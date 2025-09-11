import { useParams } from "react-router-dom";
import { products } from "./datas";

export const ProductDetail = () => {
	const { id } = useParams();
	const product = products.find((product) => product.id === Number(id));
	return (
		<div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
			<img
				style={{ width: "250px", height: "260px" }}
				src={product?.img}
				alt=""
			/>
			<div style={{ display: "flex", flexDirection: "column", gap:"10px" }}>
				<div>ID: {product?.id}</div>
				<div>ProductName: {product?.nameProduct}</div>
				<div>Price: {product?.price}</div>
			</div>
		</div>
	);
};
