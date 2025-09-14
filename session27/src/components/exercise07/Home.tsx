import { useNavigate } from "react-router-dom";

export const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="w-fit m-auto">
			<h1>Trang chủ</h1>
			<div className="mt-3">
				Đây là trang chủ. Thử gõ 1 đường dẫn không tồn tại để hiện thị lõi 404
			</div>
			<button
				onClick={() => navigate("/about")}
				className="mt-3 p-2 rounded-lg bg-[#4B3AF0] text-white"
			>
				About
			</button>
		</div>
	);
};
