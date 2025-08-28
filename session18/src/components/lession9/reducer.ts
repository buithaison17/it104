interface LoginState {
	email: string;
	password: string;
}

type Action =
	| { type: "SET_EMAIL"; payload: string }
	| { type: "SET_PASSWORD"; payload: string };

export const reducer = (state: LoginState, action: Action): LoginState => {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_PASSWORD":
			return { ...state, password: action.payload };
		default:
			return state;
	}
};
