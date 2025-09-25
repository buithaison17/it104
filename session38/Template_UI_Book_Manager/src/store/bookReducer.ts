import type { Book } from "../components/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface StateType {
	books: Book[];
	loading: boolean;
}

const initialState: StateType = {
	books: [],
	loading: false,
};

export const fetchData = createAsyncThunk<Book[]>("books/set", async () => {
	try {
		const response = await axios.get("http://localhost:8080/books");
		return response.data;
	} catch (error) {
		console.log(error);
	}
});

export const addBook = createAsyncThunk<Book, Book>(
	"books/add,",
	async (book) => {
		try {
			const response = await axios.post("http://localhost:8080/books", book);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const editBook = createAsyncThunk<Book, Book>(
	"books/edit",
	async (book) => {
		try {
			const response = await axios.put(
				`http://localhost:8080/books/${book.id}`,
				book
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteBook = createAsyncThunk<string | void, string>(
	"books/delete",
	async (id) => {
		try {
			await axios.delete(`http://localhost:8080/books/${id}`);
			return id;
		} catch (error) {
			console.log(error);
		}
	}
);

const bookSlice = createSlice({
	name: "bookSlice",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.loading = false;
			state.books = [...action.payload];
		});
		builder.addCase(addBook.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(addBook.fulfilled, (state, action) => {
			state.loading = false;
			state.books = [...state.books, action.payload];
		});
		builder.addCase(editBook.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(editBook.fulfilled, (state, action) => {
			state.loading = false;
			state.books = state.books.map((book) =>
				book.id === action.payload.id
					? {
							...book,
							title: action.payload.title,
							author: action.payload.author,
							category: action.payload.category,
							year: action.payload.year,
					  }
					: book
			);
		});
		builder.addCase(deleteBook.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(deleteBook.fulfilled, (state, action) => {
			state.loading = false;
			state.books = state.books.filter((book) => book.id !== action.payload);
		});
	},
});

export default bookSlice.reducer;
