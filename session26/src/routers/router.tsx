import { createBrowserRouter } from "react-router-dom";
import { Student } from "../components/exercise03/Student";
import { Account } from "../components/exercise05/Account";
import { PrivateRouter } from "../components/exercise05/PrivateRouter";
import { Login } from "../components/exercise06/Login";
import { Teams } from "../components/exercise07/Teams";
import { TeamsIndex } from "../components/exercise07/TeamsIndex";
import { Team } from "../components/exercise07/Team";
import { lazy } from "react";
import { withSuspense } from "./withSuspense";
import { ListProduct } from "../components/exercise10/ListProduct";
import { ProductDetail } from "../components/exercise10/ProductDetail";
import { Contact } from "../components/exercise09/Contact";
import { Header } from "../components/exercise09/Header";
import { About } from "../components/exercise09/About";
import { Post } from "../components/exercise09/Post";

const LazyLoadComp = lazy(
	() => import("../components/exercise08/LazyLoadComp")
);

export const router = createBrowserRouter([
	// Bài 1
	// {
	// 	path: "/product/:id",
	// 	element: <ProductDetail></ProductDetail>,
	// },
	// Bài 2
	// {
	// 	path: "/student/:name",
	// 	element: <Student></Student>,
	// },
	// Bài 3
	{
		path: "/student/",
		element: <Student></Student>,
	},
	// Bài 5
	// {
	// 	path: "/login",
	// 	element: <Login></Login>,
	// },
	// {
	// 	path: "/account",
	// 	element: (
	// 		<PrivateRouter>
	// 			<Account></Account>
	// 		</PrivateRouter>
	// 	),
	// },
	// Bài 6
	{
		path: "/login",
		element: <Login></Login>,
	},
	{
		path: "/account",
		element: (
			<PrivateRouter>
				<Account></Account>
			</PrivateRouter>
		),
	},
	// Bài 7
	{
		path: "/teams",
		element: <Teams></Teams>,
		children: [
			{
				index: true,
				element: <TeamsIndex></TeamsIndex>,
			},
			{
				path: ":id",
				element: <Team></Team>,
			},
		],
	},
	// Bài 8
	{
		path: "/ex08",
		element: withSuspense(<LazyLoadComp />),
	},
	//Bài 9
	{
		path: "/ex09",
		element: <Header></Header>,
		children: [
			{
				path: "contact",
				element: <Contact></Contact>,
			},
			{
				path: "about",
				element: <About></About>,
			},
			{
				path: "post",
				element: <Post></Post>,
			},
		],
	},
	// Bài 10
	{
		path: "/ex10",
		element: <ListProduct></ListProduct>,
	},
	{
		path: "/product-detail/:id",
		element: <ProductDetail></ProductDetail>,
	},
]);
