import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./bookReducer";

export const store = configureStore({
	reducer: { bookReducer: bookReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
