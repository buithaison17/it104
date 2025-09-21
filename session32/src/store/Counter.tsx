type Action = { type: "INCREASE" } | { type: "DECREASE" };

export const counter = (state: number = 0, action: Action): number => {
	switch (action.type) {
		case "INCREASE":
			return state + 1;
		case "DECREASE":
			return Math.max(state - 1, 0);
		default:
			return state;
	}
};
