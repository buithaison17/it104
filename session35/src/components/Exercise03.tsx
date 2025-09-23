import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { toggleTheme } from "../store/toggleTheme";

export const Exercise03 = () => {
	const state = useSelector((state: RootState) => state.toggleTheme);
	const dispatch = useDispatch();
	return (
		<div
			style={{
				width: "500px",
				height: "500px",
				backgroundColor: `${state.theme === "light" ? "white" : "black"}`,
			}}
		>
			<button onClick={() => dispatch(toggleTheme())}>
				{state.theme.charAt(0).toUpperCase() + state.theme.slice(1)}
			</button>
		</div>
	);
};
