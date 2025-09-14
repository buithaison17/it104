import { NavLink, Outlet } from "react-router-dom";

export const BlogLayout = () => {
	const activeClass = ({ isActive }: { isActive: boolean }) =>
		`w-full py-1 px-2 rounded-lg hover:cursor-pointer block ${
			isActive ? "bg-[#6D60EB] text-white" : "hover:bg-[#5748d8]"
		}`;

	return (
		<div className="container h-[100vh] m-auto flex">
			<div className="bg-gradient-to-b from-[#4A3AEE] to-[#362CAE] text-white w-[25%] p-4">
				<h1 className="text-[25px] font-bold text-center mb-3">My Blog</h1>
				<div>
					<NavLink className={activeClass} to="post">
						Post
					</NavLink>
				</div>
			</div>
			<Outlet />
		</div>
	);
};
