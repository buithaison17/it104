import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import "../../styles/lession9.css";
import type { Language } from "./LanguageContext";

export const Exercise09 = () => {
	const { language, toggleLanguage } = useContext(LanguageContext);
	const handleInput = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		toggleLanguage(e.target.value as Language);
	};
	return (
		<div className="container">
			<div className="change-language">
				<div>Ngôn ngữ hiện tại:</div>
				<select value={language} onChange={handleInput}>
					<option value="en">English</option>
					<option value="vi">Vietnamese</option>
				</select>
			</div>
			{language === "vi" ? <h1>Xin chào!</h1> : <h1>Welcome!</h1>}
		</div>
	);
};
