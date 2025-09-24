import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	password: string;
}

interface StateType {
	users: User[];
	currentUser: User | null;
}

const initialState: StateType = {
	users: [
		{
			name: "Bùi Thái Sơn",
			email: "sonbui@gmail.com",
			password: "123456",
		},
		{
			name: "Bùi Thái Sơn",
			email: "sonbui1@gmail.com",
			password: "123456",
		},
	],
	currentUser: null,
};

const loginReducer = createSlice({
	name: "loginReducer",
	initialState,
	reducers: {
		loginUser: (
			state,
			action: PayloadAction<{ email: string; password: string }>
		) => {
			const user = state.users.find(
				(user) =>
					user.email === action.payload.email &&
					user.password === action.payload.password
			);
			if (user) state.currentUser = user;
			else state.currentUser = null;
		},
		logoutUser: (state) => {
			state.currentUser = null;
		},
	},
});

export const { loginUser, logoutUser } = loginReducer.actions;
export default loginReducer.reducer;
