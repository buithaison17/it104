import { useEffect, useState } from "react";

export const Timer = () => {
	const [seconds, setSetconds] = useState(0);
	useEffect(() => {
		const timerId = setInterval(() => {
			setSetconds((prev) => prev + 1);
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return <div>{seconds}</div>;
};
