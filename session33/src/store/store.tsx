import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducerShop } from "./ReducerShop";
import { reducerCart } from "./ReducerCart";

const rootReducer = combineReducers({
	reducerShop: reducerShop,
	reducerCart: reducerCart,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
