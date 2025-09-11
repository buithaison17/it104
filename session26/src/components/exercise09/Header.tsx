import { NavLink, Outlet } from "react-router-dom";

export const Header = () => {
	const navStyle = ({ isActive }: { isActive: boolean }) => ({
		padding: "6px 12px",
		textDecoration: "none",
		borderRadius: "6px",
		fontWeight: isActive ? "bold" : "normal",
		color: isActive ? "white" : "#0077cc",
		backgroundColor: isActive ? "#0077cc" : "transparent",
	});
	return (
		<div>
			<NavLink style={navStyle} to="contact" end>
				Contact
			</NavLink>
			<NavLink style={navStyle} to="about">
				About
			</NavLink>
			<NavLink style={navStyle} to="post">
				Post
			</NavLink>
			<Outlet></Outlet>
		</div>
	);
};
