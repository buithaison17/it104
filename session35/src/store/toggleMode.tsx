import { createSlice } from "@reduxjs/toolkit";

type Mode = "LIST_MODE" | "GRID_MODE";

interface StateType {
	mode: Mode;
}

const initialState: StateType = {
	mode: "LIST_MODE",
};

const modeSlice = createSlice({
	name: "toggleMode",
	initialState,
	reducers: {
		toggleMode: (state: StateType) => {
			state.mode = state.mode === "LIST_MODE" ? "GRID_MODE" : "LIST_MODE";
		},
	},
});

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;
