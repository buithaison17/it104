import { useNavigate } from "react-router-dom";
import { products } from "./datas";

export const ProductList = () => {
	const naviagte = useNavigate();
	return (
		<>
			<div className="bg-[#007BFF] text-center text-white p-4">
				<h1 className="text-[30px] font-bold">Trang Chi Tiết Sản Phẩm</h1>
				<div>Danh sách sản phẩm</div>
			</div>
			<div className="p-4">
				<h2 className="font-bold text-[25px] mb-4">Danh sách sản phẩm</h2>
				<div className="flex gap-2">
					{products.map((product) => (
						<div key={product.id} className="p-3 border-[1px] border-gray-500 rounded-xl">
							<div className="text-[20px] font-bold">{product.name}</div>
							<div>{`${product.price.toLocaleString("vi-VN")} VND`}</div>
							<div
								onClick={() => naviagte(`/product/${product.id}`)}
								className="text-blue-500 hover:cursor-default hover:underline"
							>
								Xem chi tiết
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
