import { useNavigate } from "react-router-dom";

export const About = () => {
	const navigate = useNavigate();
	return (
		<div className="w-fit m-auto">
			<h1>About</h1>
			<div className="mt-3">Đây là trang giới thiệu mẫu</div>
			<div
				className="mt-3 text-[#4B3AF0] hover:underline cursor-default"
				onClick={() => navigate("/home")}
			>
				Quay lại trang chủ
			</div>
		</div>
	);
};
