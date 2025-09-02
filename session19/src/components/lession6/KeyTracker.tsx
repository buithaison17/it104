import { useEffect, useState } from "react";

export const KeyTracker = () => {
	const [key, setKey] = useState("");
	useEffect(() => {
		const handle = (e: KeyboardEvent): void => {
			setKey(e.key);
		};
		window.addEventListener("keydown", handle);
	});
	return (
		<>
			<h1>Phím vừa nhấn: {key}</h1>
		</>
	);
};
