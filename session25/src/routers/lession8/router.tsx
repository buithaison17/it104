import { createBrowserRouter } from "react-router-dom";
import { ListUser } from "../../pages/lession8/ListUser";
import { UserDetail } from "../../pages/lession8/UserDetail";

export const router = createBrowserRouter([
	{
		path: "/list-user",
		element: <ListUser></ListUser>,
	},
	{
		path: "user-detail/:id/:username/:email/:password",
		element: <UserDetail></UserDetail>,
	},
]);
