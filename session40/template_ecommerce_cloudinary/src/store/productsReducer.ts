import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import type { ProductRow } from "../pages/Products";
import type { CategoryRow } from "../pages/Categories";

interface StateType {
	products: ProductRow[];
	categoties: CategoryRow[];
}

const initialState: StateType = {
	products: [],
	categoties: [],
};

export const fetchData = createAsyncThunk<ProductRow[]>(
	"products/set",
	async () => {
		try {
			const response = await axios.get("http://localhost:8080/products");
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const fetchDataCategories = createAsyncThunk<CategoryRow[]>(
	"categories/set",
	async () => {
		try {
			const response = await axios.get("http://localhost:8080/categories");
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const addProduct = createAsyncThunk<ProductRow, ProductRow>(
	"products/add",
	async (product) => {
		try {
			const response = await axios.post(
				"http://localhost:8080/products",
				product
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const addCategory = createAsyncThunk<CategoryRow, CategoryRow>(
	"categories/add",
	async (category) => {
		try {
			const response = await axios.post(
				"http://localhost:8080/categories",
				category
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteProduct = createAsyncThunk<string | void, string>(
	"products/delete",
	async (id) => {
		try {
			await axios.delete(`http://localhost:8080/products/${id}`);
			return id;
		} catch (error) {
			console.log(error);
		}
	}
);

export const deleteCategory = createAsyncThunk<string | void, string>(
	"categories/delete",
	async (id) => {
		try {
			await axios.delete(`http://localhost:8080/categories/${id}`);
			return id;
		} catch (error) {
			console.log(error);
		}
	}
);

export const editProduct = createAsyncThunk<ProductRow, ProductRow>(
	"products/edit",
	async (product) => {
		try {
			const response = await axios.put(
				`http://localhost:8080/products/${product.id}`,
				product
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

export const editCategory = createAsyncThunk<CategoryRow, CategoryRow>(
	"categories/edit",
	async (category) => {
		try {
			const response = await axios.put(
				`http://localhost:8080/categories/${category.id}`,
				category
			);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	}
);

const productsSlice = createSlice({
	name: "productsSlice",
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder.addCase(fetchData.fulfilled, (state, action) => {
			state.products = action.payload;
		});
		builder.addCase(addProduct.fulfilled, (state, action) => {
			state.products = [...state.products, action.payload];
		});
		builder.addCase(deleteProduct.fulfilled, (state, action) => {
			state.products = state.products.filter((p) => p.id !== action.payload);
		});
		builder.addCase(editProduct.fulfilled, (state, action) => {
			state.products = state.products.map((product) =>
				product.id === action.payload.id
					? {
							...product,
							code: action.payload.code,
							category: action.payload.category,
							name: action.payload.name,
							price: action.payload.price,
							image: action.payload.image,
							status: action.payload.status,
					  }
					: product
			);
		});
		builder.addCase(fetchDataCategories.fulfilled, (state, action) => {
			state.categoties = action.payload;
		});
		builder.addCase(addCategory.fulfilled, (state, action) => {
			state.categoties = [...state.categoties, action.payload];
		});
		builder.addCase(deleteCategory.fulfilled, (state, action) => {
			state.categoties = state.categoties.filter(
				(c) => c.id !== action.payload
			);
		});
		builder.addCase(editCategory.fulfilled, (state, action) => {
			state.categoties = state.categoties.map((c) =>
				c.id === action.payload.id
					? {
							...c,
							name: action.payload.name,
							status: action.payload.status,
							description: action.payload.description,
					  }
					: c
			);
		});
	},
});

export default productsSlice.reducer;
