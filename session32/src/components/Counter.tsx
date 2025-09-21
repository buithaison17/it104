import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useDispatch } from "react-redux";

export const Counter = () => {
	const state = useSelector((state: RootState) => state.ex03);
	const dispatch = useDispatch();
	return (
		<div>
			<div>{state}</div>
			<div className="flex gap-3">
				<button onClick={() => dispatch({ type: "INCREASE" })}>Tăng</button>
				<button onClick={() => dispatch({ type: "DECREASE" })}>Giảm</button>
			</div>
		</div>
	);
};
