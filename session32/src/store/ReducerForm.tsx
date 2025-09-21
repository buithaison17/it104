export interface User {
	email: string;
	password: string;
}

interface StateType {
	users: User[];
}

const initialState: StateType = { users: [] };

type Action = { type: "ADD_USER"; payload: User };

export const reducerForm = (
	state: StateType = initialState,
	action: Action
): StateType => {
	switch (action.type) {
		case "ADD_USER":
			return { ...state, users: [...state.users, action.payload] };
		default:
			return state;
	}
};
