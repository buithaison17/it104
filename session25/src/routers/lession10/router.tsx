import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../../pages/lession10/LoginForm";
import { RegisterForm } from "../../pages/lession10/RegisterForm";
import { HomePage } from "../../pages/lession10/HomePage";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginForm></LoginForm>,
	},
	{
		path: "/register",
		element: <RegisterForm></RegisterForm>,
	},
	{
		path: "/home-page",
		element: <HomePage></HomePage>,
	},
]);
