import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const RandomNumber = () => {
	const state = useSelector((state: RootState) => state.ex04);
	const dispatch = useDispatch();
	return (
		<div>
			<div>
				[{state === 0 ? "" : Math.round(state).toLocaleString("vi-VN")}]
			</div>
			<button onClick={() => dispatch({ type: "GENERATE_RANDOM_NUMBER" })}>
				Generate Random Number
			</button>
		</div>
	);
};
