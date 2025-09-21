type Action = { type: "TOGGLE_STATUS" };

type Text = "Rikkei Academy" | "RikkeiSoft";

export const changeState = (
	state: Text = "Rikkei Academy",
	action: Action
): Text => {
	switch (action.type) {
		case "TOGGLE_STATUS": {
			if (state === "Rikkei Academy") return "RikkeiSoft";
			else return "Rikkei Academy";
		}
		default:
			return state;
	}
};
