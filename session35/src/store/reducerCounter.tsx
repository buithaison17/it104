import { createSlice } from "@reduxjs/toolkit";

interface StateType {
	value: number;
}

const initialState: StateType = {
	value: 0,
};

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			return { ...state, value: state.value + 1 };
		},
		decrement: (state) => {
			return { ...state, value: Math.max(state.value - 1, 0) };
		},
		reset: (state) => {
			return { ...state, value: 0 };
		},
	},
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
