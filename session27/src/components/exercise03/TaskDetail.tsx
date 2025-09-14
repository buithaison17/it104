import { useNavigate, useParams } from "react-router-dom";
import { products } from "../exercise02/datas";

export const TaskDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const product = products.find((product) => product.id === Number(id));
	return (
		<div className="w-fit p-3 ml-[200px] mt-3">
			<h1 className="text-[25px] font-bold mb-2">{product?.name}</h1>
			<div>{product?.description}</div>
			<button
				onClick={() => navigate("/task")}
				className="px-2 py-2 bg-blue-500 text-white rounded-lg mt-2"
			>
				Quay lại
			</button>
		</div>
	);
};
