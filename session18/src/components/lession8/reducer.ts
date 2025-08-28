export interface ToDoType {
	id: number;
	content: string;
}

type Action =
	| { type: "ADD"; payload: string }
	| { type: "REMOVE"; payload: number };

export interface ToDoSate {
	todos: ToDoType[];
}

export const reducer = (todoSate: ToDoSate, action: Action): ToDoSate => {
	switch (action.type) {
		case "ADD": {
			const newToDo: ToDoType = {
				id: todoSate.todos.length + 1,
				content: action.payload,
			};
			return { ...todoSate, todos: [...todoSate.todos, newToDo] };
		}
		case "REMOVE":
			return {
				...todoSate,
				todos: todoSate.todos.filter((todo) => todo.id !== action.payload),
			};
		default:
			return todoSate;
	}
};
