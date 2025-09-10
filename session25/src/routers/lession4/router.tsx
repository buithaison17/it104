import { createBrowserRouter } from "react-router-dom";
import { RegisterForm } from "../../pages/lession4/RegisterForm";

export const router = createBrowserRouter([
	{
		path: "/register",
		element: <RegisterForm></RegisterForm>,
	},
]);
