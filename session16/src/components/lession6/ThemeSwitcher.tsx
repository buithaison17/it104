import { useState } from "react";
import "../../styles/lession6.css";

type Theme = "white" | "black";

export const ThemeSwitcher = () => {
	const [theme, setTheme] = useState<Theme>("white");
	const handleTheme = (): void => {
		setTheme(theme === 'white' ? "black" : "white");
	}
	return (
		<div style={{ backgroundColor: theme }} className="container">
			<h1 style={{ color: theme === "black" ? "white" : "black" }}>
				{theme === "black" ? "Chế độ tối" : "Chế độ sáng"}
			</h1>
			<button onClick={handleTheme}>Chuyển chế độ</button>
		</div>
	);
};
