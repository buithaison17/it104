import type { Student } from "../utils/types";

type Action =
	| { type: "SET_STUDENTS"; payload: Student[] }
	| { type: "ADD_STUDENT"; payload: Student }
	| { type: "DELETE_STUDENT"; payload: string }
	| { type: "EDIT_STUDENT"; payload: { id: string; student: Student } };

export const studentReducer = (
	state: Student[] = [],
	action: Action
): Student[] => {
	switch (action.type) {
		case "SET_STUDENTS": {
			return action.payload;
		}
		case "ADD_STUDENT": {
			return [...state, action.payload];
		}
		case "DELETE_STUDENT": {
			return state.filter((s) => s.id !== action.payload);
		}
		case "EDIT_STUDENT": {
			return state.map((s) =>
				s.id === action.payload.id
					? {
							...s,
							name: action.payload.student.name,
							id: action.payload.id,
							gender: action.payload.student.gender,
							age: action.payload.student.age,
							birthday: action.payload.student.birthday,
							hometown: action.payload.student.hometown,
							address: action.payload.student.address,
					  }
					: s
			);
		}
		default:
			return state;
	}
};
