import { useState } from "react";

export const ChangeColor = () => {
	const [color, setColor] = useState("black");
	const handleChange = (): void => {
		setColor("red");
	};
	return (
		<>
			<h1 style={{ color: color }}>Tiêu đề văn bản</h1>
			<button onClick={handleChange}>Thay đổi màu</button>
		</>
	);
};
