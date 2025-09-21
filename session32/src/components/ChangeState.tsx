import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useDispatch } from "react-redux";

export const ChangeState = () => {
	const state = useSelector((state: RootState) => state.ex05);
	const dispatch = useDispatch();
	return (
		<div>
			<div>{state}</div>
			<button onClick={() => dispatch({type:"TOGGLE_STATUS"})}>Change state</button>
		</div>
	);
};
