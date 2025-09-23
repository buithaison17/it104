import { createSlice } from "@reduxjs/toolkit";

type Theme = "light" | "dark";

interface StateType {
	theme: Theme;
}

const initialState: StateType = {
	theme: "light",
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme: (state: StateType) => {
			state.theme = state.theme === "light" ? "dark" : "light";
		},
	},
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
