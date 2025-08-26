import { useState } from "react";

export const Exercise1 = () => {
	const [name] = useState("Nguyễn Văn A");
	return <h1>{name}</h1>;
};
