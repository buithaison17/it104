import React, { useState } from "react";
import "../../styles/lession4.css";

export const PageTitle = () => {
	const [title, setTitle] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setTitle(e.target.value);
	};
	return (
		<div className="container">
			<title>{title.length ? title : "Page Title"}</title>
			<h2>Chào mừng bạn đến với trang web của chúng tôi</h2>
			<input
				type="text"
				placeholder="Nhập tiêu đề của bạn"
				value={title}
				onChange={handleChange}
			/>
			<div>Tiêu đề sẽ thay đổi khi bạn nhập vào trường dữ liệu</div>
		</div>
	);
};
