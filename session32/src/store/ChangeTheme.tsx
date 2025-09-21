export type Theme = "light" | "dark";
type Action = { type: "TOGGLE_THEME" };

export const toggleTheme = (state: Theme = "light", action: Action): Theme => {
	switch (action.type) {
		case "TOGGLE_THEME":
			return state === "light" ? "dark" : "light";
		default:
			return state;
	}
};
