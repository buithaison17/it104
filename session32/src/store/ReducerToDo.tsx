export interface ToDo {
	id: number;
	title: string;
	level: number;
	isDone: boolean;
}

export interface StateType {
	todos: ToDo[];
}

const fetchData = (): ToDo[] => {
	const datas = localStorage.getItem("todos");
	return datas ? JSON.parse(datas) : [];
};

const initialState: StateType = {
	todos: fetchData(),
};

type Action =
	| { type: "ADD_TODO"; payload: ToDo }
	| { type: "DELETE_TODO"; payload: number }
	| { type: "EDIT_TODO"; payload: { id: number; title: string; level: number } }
	| { type: "TOGGLE_STATUS"; payload: number }
	| { type: "DELETE_ALL_TODO" }
	| { type: "DONE_ALL_TODO" };

export const reducerToDo = (
	state: StateType = initialState,
	action: Action
): StateType => {
	switch (action.type) {
		case "ADD_TODO": {
			return { ...state, todos: [...state.todos, action.payload] };
		}
		case "DELETE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.payload),
			};
		case "EDIT_TODO": {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload.id
						? {
								...todo,
								title: action.payload.title,
								level: action.payload.level,
						  }
						: todo
				),
			};
		}
		case "TOGGLE_STATUS": {
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
				),
			};
		}
		case "DELETE_ALL_TODO": {
			return { ...state, todos: [] };
		}
		case "DONE_ALL_TODO": {
			return {
				...state,
				todos: state.todos.map((todo) =>
					!todo.isDone ? { ...todo, isDone: true } : todo
				),
			};
		}
		default:
			return state;
	}
};
