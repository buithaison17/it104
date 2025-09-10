import { createBrowserRouter } from "react-router-dom";
import { Home } from "../../pages/lession1/Home";
import { Contact } from "../../pages/lession1/Contact";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
	},
	{
		path: "/contact",
		element: <Contact></Contact>,
	},
]);
