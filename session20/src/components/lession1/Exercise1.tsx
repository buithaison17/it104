import React, { useState } from "react";

export const Exercise1 = () => {
	const [input, setInput] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
	};
	return (
		<>
			<h4>Kiểm tra độ dài chuỗi nhập vào</h4>
			<input type="text" value={input} onChange={handleChange} />
			{input.length > 5 && <div>Chuỗi nhập vào phải dài hơn 5 kí tự</div>}
		</>
	);
};
