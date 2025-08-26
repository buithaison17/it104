import React, { useState } from "react";

export const Checkbox = () => {
	const [hobies, setHobies] = useState<string[]>([]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { checked, value } = e.target;
		if (checked) {
			setHobies((prev) => [...prev, value]);
		} else {
			setHobies((prev) => prev.filter((hobie) => hobie !== value));
		}
	};
	return (
		<>
			<div>Sở thích: [{hobies.join(", ")}]</div>
			<input
				checked={hobies.includes("Đi chơi")}
				onChange={handleChange}
				type="checkbox"
				value="Đi chơi"
			/>
			Đi chơi
			<br />
			<input
				checked={hobies.includes("Code")}
				onChange={handleChange}
				type="checkbox"
				value="Code"
			/>
			Code
			<br />
			<input
				checked={hobies.includes("Bơi lội")}
				onChange={handleChange}
				type="checkbox"
				value="Bơi lội"
			/>
			Bơi lội
			<br />
			<input
				checked={hobies.includes("Nhảy dây")}
				onChange={handleChange}
				type="checkbox"
				value="Nhảy dây"
			/>
			Nhảy dây
		</>
	);
};
