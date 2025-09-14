import { useNavigate, useParams } from "react-router-dom";
import { products } from "./datas";

export const ProductDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const product = products.find((product) => product.id === Number(id));
	return (
		<>
			<div className="bg-[#007BFF] text-center text-white p-4">
				<h1 className="text-[30px] font-bold">Trang Chi Tiết Sản Phẩm</h1>
				<div>Danh sách sản phẩm</div>
			</div>
			<div className="p-4">
				<div className="text-[25px] font-bold">Chi tiết sản phẩm</div>
				<div className="flex flex-col gap-3">
					<div className="text-[18px] font-bold">{product?.name}</div>
					<div>{`Giá: ${product?.price.toLocaleString("vi-VN")} VND`}</div>
					<div>{`Mô tả: ${product?.description}`}</div>
					<div onClick={() => navigate("/product")} className="text-blue-500 hover:cursor-default hover:underline">
						Quay lại danh sách sản phẩm
					</div>
				</div>
			</div>
		</>
	);
};
