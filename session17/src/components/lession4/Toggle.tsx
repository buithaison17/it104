import { useState } from "react";

export const Toggle = () => {
	const [isHide, setDisplay] = useState(false);
	const changeDisplay = (): void => {
		setDisplay(!isHide);
	};
	return (
		<>
			{!isHide && <h1>Tiêu đề văn bản</h1>}
			<button onClick={changeDisplay}>{isHide ? "Hiện" : "Ẩn"}</button>
		</>
	);
};
