import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/lession1/Home";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
	},
]);
