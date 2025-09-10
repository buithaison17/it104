import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../../pages/lession9/LoginForm";
import { RegisterForm } from "../../pages/lession9/RegisterForm";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginForm></LoginForm>,
	},
	{
		path: "/register",
		element: <RegisterForm></RegisterForm>,
	},
]);
