import { createSlice } from "@reduxjs/toolkit";

interface User {
	id: number;
	name: string;
	isFavorite: boolean;
}

interface StateType {
	users: User[];
}

const initialState: StateType = {
	users: [
		{
			id: 1,
			name: "Nguyễn Văn A",
			isFavorite: true,
		},
		{
			id: 2,
			name: "Nguyễn Văn B",
			isFavorite: false,
		},
		{
			id: 3,
			name: "Nguyễn Văn C",
			isFavorite: true,
		},
		{
			id: 4,
			name: "Nguyễn Văn C",
			isFavorite: true,
		},
	],
};

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
});

export default listSlice.reducer;
