import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useDispatch } from "react-redux";

const ChangeTheme = () => {
	const state = useSelector((state: RootState) => state.ex06);
	const dispatch = useDispatch();
	return (
		<div
			className={
				state === "light" ? "bg-white h-full" : "bg-black text-white h-[100vh]"
			}
		>
			<input
				type="checkbox"
				checked={state === "dark"}
				onChange={() => dispatch({ type: "TOGGLE_THEME" })}
			/>{" "}
			{state === "light" ? "Sáng" : "Tối"}
		</div>
	);
};

export default ChangeTheme;
