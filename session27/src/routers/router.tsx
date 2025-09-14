import { createBrowserRouter } from "react-router-dom";
// import { ProductList } from "../components/exercise04/ProductList";
import { BlogLayout } from "../components/exercise05/BlogLayout";
import { Post } from "../components/exercise05/Post";
import { PostDetail } from "../components/exercise05/PostDetail";
import { Register } from "../components/exercise08/Register";
import { Login } from "../components/exercise08/Login";
import { ProductList } from "../components/exercise02/ProductList";
import { ProductDetail } from "../components/exercise02/ProductDetail";
import { Task } from "../components/exercise03/Task";
import { TaskDetail } from "../components/exercise03/TaskDetail";
// import { Home } from "../components/exercise07/Home";
// import { About } from "../components/exercise07/About";
import { Exercise01 } from "../components/exercise01/Exercise01";
import { Home } from "../components/exercise01/Home";
import { About } from "../components/exercise01/About";
import { Contact } from "../components/exercise01/Contact";

export const router = createBrowserRouter([
	// Bài 1
	{
		path: "/",
		element: <Exercise01></Exercise01>,
		children: [
			{
				index: true,
				element: <Home></Home>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "contact",
				element: <Contact></Contact>,
			},
		],
	},
	// Bài 2
	{
		path: "/product",
		element: <ProductList></ProductList>,
	},
	{
		path: "product/:id",
		element: <ProductDetail></ProductDetail>,
	},
	// Bài 3
	{
		path: "/task",
		element: <Task></Task>,
	},
	{
		path: "/task/:id",
		element: <TaskDetail></TaskDetail>,
	},
	// Bài 4
	// {
	// 	path: "/product",
	// 	element: <ProductList></ProductList>,
	// },
	// Bài 5
	{
		path: "/blog",
		element: <BlogLayout></BlogLayout>,
		children: [
			{
				path: "post",
				element: <Post></Post>,
			},
			{
				path: "post/:id",
				element: <PostDetail></PostDetail>,
			},
		],
	},
	// Bài 7
	// {
	// 	path: "/home",
	// 	element: <Home></Home>,
	// },
	// {
	// 	path: "/about",
	// 	element: <About></About>,
	// },
	// Bài 8
	{
		path: "/register",
		element: <Register></Register>,
	},
	{
		path: "/login",
		element: <Login></Login>,
	},
]);
