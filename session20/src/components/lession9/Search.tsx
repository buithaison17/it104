import React, { useState } from "react";
import "../../styles/lession9.css";

const data = [
	{
		id: 1,
		name: "Apple iPhone 13",
		description: "Smartphone mới nhất của Apple",
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		description: "Smartphone flagship của Samsung",
	},
	{
		id: 3,
		name: "OnePlus 9 Pro",
		description: "Smartphone hiệu suất cao từ OnePlus",
	},
	{
		id: 4,
		name: "Google Pixel 6",
		description: "Điện thoại thông minh của Google",
	},
	{
		id: 5,
		name: "Xiaomi Mi 11",
		description: "Điện thoại thông minh giá rẻ",
	},
];

export const Search = () => {
	const [inputSearch, setInputSearch] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInputSearch(e.target.value);
	};
	const dataFiltered = data.filter((data) =>
		data.name.toLowerCase().includes(inputSearch.toLowerCase().trim())
	);
	return (
		<div className="container">
			<h1>Tìm kiếm sản phẩm</h1>
			<input
				type="text"
				placeholder="Nhập từ khóa tìm kiếm..."
				value={inputSearch}
				onChange={handleChange}
			/>
			<div className="item-list">
				{dataFiltered.map((data) => (
					<div key={data.id} className="item">
						<div className="name-product">{data.name}</div>
						<div className="description">{data.description}</div>
					</div>
				))}
			</div>
		</div>
	);
};
