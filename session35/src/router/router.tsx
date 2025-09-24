import { createBrowserRouter } from "react-router-dom";
import { Exercise08 } from "../components/Exercise08";
import { Exercise08Home } from "../components/Exercise08Home";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <Exercise08></Exercise08>,
	},
	{
		path: "/home",
		element: <Exercise08Home></Exercise08Home>,
	},
]);
