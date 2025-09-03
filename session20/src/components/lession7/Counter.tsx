import { useReducer } from "react";

type Action = { type: "INCRESE" } | { type: "DECREASE" };

const reducer = (count: number, action: Action): number => {
	switch (action.type) {
		case "INCRESE":
			return count + 1;
		case "DECREASE":
			return Math.max(0, count - 1);
		default:
			return count;
	}
};

export const Counter = () => {
	const [count, dispatch] = useReducer(reducer, 0);
	return (
		<div>
			<h1>Số đếm: {count}</h1>
			<div style={{ display: "flex", gap: "5px" }}>
				<button onClick={() => dispatch({ type: "INCRESE" })}>Tăng</button>
				<button onClick={() => dispatch({ type: "DECREASE" })}>Giảm</button>
			</div>
		</div>
	);
};
