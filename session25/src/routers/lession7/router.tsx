import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../pages/lession7/HomePage";
import { CustomLink } from "../../pages/lession7/CustomLink";
import { NotFound } from "../../pages/lession7/NotFound";

export const router = createBrowserRouter([
	{
		path: "home-page",
		element: <HomePage></HomePage>,
	},
	{
		path: "custom-link",
		element: <CustomLink></CustomLink>,
	},
	{
		path: "*",
		element: <NotFound></NotFound>,
	},
]);
