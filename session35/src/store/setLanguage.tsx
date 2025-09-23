import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Language = "vietnamese" | "english";

interface StateType {
	language: Language;
}

const initialState: StateType = {
	language: "english",
};

const languageSlice = createSlice({
	name: "toggleLanguage",
	initialState,
	reducers: {
		setLanguage: (state: StateType, action: PayloadAction<Language>) => {
			state.language = action.payload;
		},
	},
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
