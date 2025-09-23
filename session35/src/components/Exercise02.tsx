import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { generateRandomNumber } from "../store/generateRandomList";

export const Exercise02 = () => {
	const state = useSelector((state: RootState) => state.randomListReducer);
	const dispatch = useDispatch();
	return (
		<div>
			<div>List number: [{state.list.join(", ")}]</div>
			<button onClick={() => dispatch(generateRandomNumber())}>
				Random number
			</button>
		</div>
	);
};
