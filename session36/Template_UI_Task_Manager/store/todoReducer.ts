import { type Task } from "../src/App";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StateType {
	tasks: Task[];
	loading: boolean;
}

const initialState: StateType = {
	tasks: [],
	loading: false,
};

export const fetchData = createAsyncThunk<Task[]>("tasks/set", async () => {
	try {
		const response = await axios.get("http://localhost:8080/tasks");
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const addTask = createAsyncThunk<Task, Task>(
	"tasks/add",
	async (task) => {
		try {
			const response = await axios.post("http://localhost:8080/tasks", task);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteTask = createAsyncThunk<string | void, string>(
	"tasks/delete",
	async (id) => {
		try {
			await axios.delete(`http://localhost:8080/tasks/${id}`);
			return id;
		} catch (error) {
			console.log(error);
		}
	}
);

export const toggleTask = createAsyncThunk<Task, Task>(
	"todos/toggle",
	async (task) => {
		try {
			const updates: Task = { ...task, completed: !task.completed };
			const response = await axios.put(
				`http://localhost:8080/tasks/${task.id}`,
				updates
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const editTask = createAsyncThunk<Task, Task>(
	"tasks/edit",
	async (task) => {
		try {
			const response = await axios.put(
				`http://localhost:8080/tasks/${task.id}`,
				task
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

const taskslice = createSlice({
	name: "taskslice",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.tasks = [...action.payload];
		});
		builder.addCase(addTask.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addTask.fulfilled, (state, action) => {
			state.loading = false;
			state.tasks = [...state.tasks, action.payload];
		});
		builder.addCase(deleteTask.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteTask.fulfilled, (state, action) => {
			state.loading = false;
			state.tasks = state.tasks.filter((task) => task.id !== action.payload);
		});
		builder.addCase(toggleTask.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(toggleTask.fulfilled, (state, action) => {
			state.loading = false;
			state.tasks = state.tasks.map((task) =>
				task.id === action.payload.id
					? { ...task, completed: !task.completed }
					: task
			);
		});
		builder.addCase(editTask.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(editTask.fulfilled, (state, action) => {
			state.loading = false;
			state.tasks = state.tasks.map((task) =>
				task.id === action.payload.id
					? {
							...task,
							title: action.payload.title,
							completed: action.payload.completed,
							priority: action.payload.priority,
					  }
					: task
			);
		});
	},
});

export default taskslice.reducer;
