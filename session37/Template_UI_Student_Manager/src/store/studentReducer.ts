import type { Student } from "../features/students/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StateType {
	students: Student[];
	loading: boolean;
}

const initialState: StateType = {
	students: [],
	loading: false,
};

export const fetchData = createAsyncThunk<Student[]>(
	"students/set",
	async () => {
		try {
			const response = await axios.get("http://localhost:8080/students");
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const addStudent = createAsyncThunk<Student, Student>(
	"students/add",
	async (student) => {
		try {
			const response = await axios.post(
				"http://localhost:8080/students",
				student
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const editStudent = createAsyncThunk<Student, Student>(
	"students/edit",
	async (student) => {
		try {
			const response = await axios.put(
				`http://localhost:8080/students/${student.id}`,
				student
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteStudent = createAsyncThunk<string | void, string>(
	"students/delete",
	async (id) => {
		try {
			await axios.delete(`http://localhost:8080/students/${id}`);
			return id;
		} catch (error) {
			console.log(error);
		}
	}
);

const studentSlice = createSlice({
	name: "studentSlice",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.students = [...action.payload];
		});
		builder.addCase(addStudent.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addStudent.fulfilled, (state, action) => {
			state.loading = false;
			state.students = [...state.students, action.payload];
		});
		builder.addCase(editStudent.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(editStudent.fulfilled, (state, action) => {
			state.loading = false;
			state.students = state.students.map((s) =>
				s.id === action.payload.id
					? {
							...s,
							name: action.payload.name,
							age: action.payload.age,
							grade: action.payload.grade,
					  }
					: s
			);
		});
		builder.addCase(deleteStudent.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteStudent.fulfilled, (state, action) => {
			state.loading = false;
			state.students = state.students.filter((s) => s.id !== action.payload);
		});
	},
});

export default studentSlice.reducer;
