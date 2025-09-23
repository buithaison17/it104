import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { decrement, increment, reset } from "../store/reducerCounter";

export const Exercise01 = () => {
	const state = useSelector((state: RootState) => state.counter);
	const dispatch = useDispatch();
	return (
		<div>
			<div>Count: {state.value}</div>
			<button onClick={() => dispatch(increment())}>Increase</button>
			<button onClick={() => dispatch(decrement())}>Decrease</button>
			<button onClick={() => dispatch(reset())}>Reset</button>
		</div>
	);
};
