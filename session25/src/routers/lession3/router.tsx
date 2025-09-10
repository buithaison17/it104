import { createBrowserRouter } from "react-router-dom";
import { LoginForm } from "../../pages/lession3/LoginForm";

export const router = createBrowserRouter([
	{
		path: "/login",
		element: <LoginForm></LoginForm>
	},
]);
