import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header: React.FC = () => {
	const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
		isActive
			? "bg-red-500 text-white font-bold py-1 px-3 rounded"
			: "text-black hover:text-red-500";
	return (
		<div>
			<nav className="flex items-center gap-4 p-4 border-b">
				<NavLink end className={navLinkClasses} to="/">
					Home
				</NavLink>
				<NavLink to="/product" className={navLinkClasses}>
					Product
				</NavLink>
				<NavLink to="/detail" className={navLinkClasses}>
					Detail
				</NavLink>
			</nav>
			<Outlet></Outlet>
		</div>
	);
};

export default Header;
