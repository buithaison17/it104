import { applyMiddleware, combineReducers, createStore } from "redux";
import { reducerEx01 } from "./ReducerEx01";
import { thunk } from "redux-thunk";
import { reducerEx02 } from "./ReducerEx02";
import { counter } from "./Counter";
import { RandomNumber } from "./RandomNumber";
import { changeState } from "./ChangeState";
import { toggleTheme } from "./ChangeTheme";
import { reducerToDo } from "./ReducerToDo";
import { reducerForm } from "./ReducerForm";

const rootReducer = combineReducers({
	ex01: reducerEx01,
	ex02: reducerEx02,
	ex03: counter,
	ex04: RandomNumber,
	ex05: changeState,
	ex06: toggleTheme,
	ToDoApp: reducerToDo,
	ex07: reducerForm,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
