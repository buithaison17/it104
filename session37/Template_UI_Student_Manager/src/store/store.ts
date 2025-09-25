import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentReducer";

export const store = configureStore({
	reducer: { studentReducer: studentReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
