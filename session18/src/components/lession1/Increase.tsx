import { useReducer } from "react";

type Action = { type: "Increase" };

const reducer = (state: number, action: Action): number => {
	switch (action.type) {
		case "Increase":
			return state + 1;
		default:
			return state;
	}
};

export const Increase = () => {
	const [count, setCount] = useReducer(reducer, 0);
	return (
		<>
			<div>{count}</div>
			<button onClick={() => setCount({ type: "Increase" })}>Increase</button>
		</>
	);
};
