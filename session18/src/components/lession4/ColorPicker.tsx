import React, { useCallback, useState } from "react";

export const ColorPicker = () => {
	const [color, setColor] = useState("");
	const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		setColor(e.target.value);
	}, []);
	return (
		<>
			<div>Màu người dùng chọn</div>
			<input onChange={handleInput} type="color" />
			<div>Màu hiển thị</div>
			<div
				style={{ width: "200px", height: "200px", backgroundColor: `${color}` }}
			></div>
		</>
	);
};
