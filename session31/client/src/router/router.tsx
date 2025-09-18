import { createBrowserRouter } from "react-router-dom";
import { ManagerPost } from "../components/ManagerPost";

export const router = createBrowserRouter([
	{ path: "/list-post", element: <ManagerPost></ManagerPost> },
]);
