import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { toggleMode } from "../store/toggleMode";

export const Exercise04 = () => {
	const state = useSelector((state: RootState) => state.toggleMode);
	const dispatch = useDispatch();
	return (
		<div>
			<div
				style={
					state.mode === "LIST_MODE"
						? { display: "flex", gap: "10px", flexDirection: "column" }
						: { display: "flex", gap: "10px" }
				}
			>
				<div
					style={{
						textAlign: "center",
						width: "200px",
						backgroundColor: "#EF4444",
						padding: "20px 5px",
					}}
				>
					1
				</div>
				<div
					style={{
						textAlign: "center",
						width: "200px",
						backgroundColor: "#EF4444",
						padding: "20px 5px",
					}}
				>
					2
				</div>
				<div
					style={{
						textAlign: "center",
						width: "200px",
						backgroundColor: "#EF4444",
						padding: "20px 5px",
					}}
				>
					3
				</div>
				<div
					style={{
						textAlign: "center",
						width: "200px",
						backgroundColor: "#EF4444",
						padding: "20px 5px",
					}}
				>
					4
				</div>
			</div>
			<button onClick={() => dispatch(toggleMode())}>Click me</button>
		</div>
	);
};
