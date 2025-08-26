import { useState } from "react";
import "../../styles/lession3.css";

export default function LoginStatus() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	 const handleChange = (): void => {
		setIsLoggedIn(!isLoggedIn);
	}
	return (
		<>
			<div className="container">
				<h1>
					{!isLoggedIn ? "Vui lòng đăng nhập để tiếp tục" : "Xin chào User"}
				</h1>
				<button onClick={handleChange}>{!isLoggedIn ? "Đăng nhập" : "Đăng xuất"}</button>
			</div>
		</>
	);
}
