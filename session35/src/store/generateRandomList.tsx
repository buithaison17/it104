import { createSlice } from "@reduxjs/toolkit";

interface StateType {
	list: number[];
}

const initialState: StateType = {
	list: [],
};

const listSlice = createSlice({
	name: "numbers",
	initialState,
	reducers: {
		generateRandomNumber: (state: StateType) => {
			const newList: number[] = [];
			for (let i = 0; i < 5; i++) {
				const num = Math.floor(Math.random() * 10);
				newList.push(num);
			}
			state.list = newList;
		},
	},
});

export const { generateRandomNumber } = listSlice.actions;
export default listSlice.reducer;
