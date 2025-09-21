type Action = { type: "GENERATE_RANDOM_NUMBER" };

export const RandomNumber = (state: number = 0, action: Action): number => {
	switch (action.type) {
		case "GENERATE_RANDOM_NUMBER":
			return Math.random() * 100000;
		default:
			return state;
	}
};
