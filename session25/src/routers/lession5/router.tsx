import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../pages/lession5/NotFound";

export const router = createBrowserRouter([
	{
		path: "/*",
		element: <NotFound></NotFound>,
	},
]);
