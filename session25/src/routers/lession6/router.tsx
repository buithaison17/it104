import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/lession6/Home";
import { Product } from "../../pages/lession6/Product";
import { Detail } from "../../pages/lession6/Detail";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>,
		children: [
			{
				path: "/",
				element: <div>Home</div>,
			},
			{
				path: "product",
				element: <Product></Product>,
			},
			{
				path: "detail",
				element: <Detail></Detail>,
			},
		],
	},
]);
