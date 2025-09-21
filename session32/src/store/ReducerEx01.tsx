export interface User {
	id: number;
	fullName: string;
	gender: Gender;
	birthday: string;
	address: string;
}

export type Gender = "Male" | "Female";

const initialState: User = {
	id: 1,
	fullName: "Nguyễn Văn Nam",
	gender: "Male",
	birthday: "20/03/2023",
	address: "Thanh Xuân, Hà Nội",
};

type Action = { type: "VIEW" };

export const reducerEx01 = (
	state: User = initialState,
	action: Action
): User => {
	switch (action.type) {
		case "VIEW":
			return state;
		default:
			return state;
	}
};
