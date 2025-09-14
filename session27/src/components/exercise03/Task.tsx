import { Link } from "react-router-dom";
import { products } from "../exercise02/datas";

export const Task = () => {
	return (
		<div className="w-fit m-auto p-4">
			<h1 className="text-[25px] font-bold mb-3">Danh sách công việc</h1>
			<div className="flex flex-col gap-3">
				{products.map((product) => (
					<div
						key={product.id}
						className="p-3 w-[500px] rounded-xl border-[1px] border-gray-500"
					>
						<div className="text-[18px] font-bold">{product.name}</div>
						<div>{product.description}</div>
						<Link className="text-blue-600 hover:underline" to={`/task/${product.id}`}>Xem chi tiết</Link>
					</div>
				))}
			</div>
		</div>
	);
};
