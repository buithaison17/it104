import { NavLink, Outlet } from "react-router-dom";

export const Exercise01 = () => {
	const navClass = ({ isActive }: { isActive: boolean }) =>
		isActive ? "underline" : "";
	return (
		<>
			<div className="bg-[#007BFF] w-full flex justify-around p-3 text-white">
				<NavLink className={navClass} to="/" end>
					Home
				</NavLink>
				<NavLink className={navClass} to="/about">
					About
				</NavLink>
				<NavLink className={navClass} to="/contact">
					Contact
				</NavLink>
			</div>
			<Outlet></Outlet>
		</>
	);
};
