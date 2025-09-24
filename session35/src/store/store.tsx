import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducerCounter";
import randomListReducer from "./generateRandomList";
import toggleTheme from "./toggleTheme";
import toggleMode from "./toggleMode";
import setLanguage from "./setLanguage";
import listSlice from "./listFavouriteUser";
import loginReducer from "./loginReducer";

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		randomListReducer: randomListReducer,
		toggleTheme: toggleTheme,
		toggleMode: toggleMode,
		setLanguage: setLanguage,
		listSlice: listSlice,
		loginReducer: loginReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
