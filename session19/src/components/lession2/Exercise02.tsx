import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Exercise02 = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div
			style={{
				width: "400px",
				backgroundColor: theme === "light" ? "white" : "black",
				padding: "15px",
				color: theme === "light" ? "black" : "white",
			}}
		>
			<h1>My Themed App</h1>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<div>Đây là nội dung chính của ứng dụng</div>
			<div>Theme hiện tại: {theme === "light" ? "Light" : "Dark"}</div>
		</div>
	);
};
