import type React from "react";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import type { Language } from "./LanguageContext";

interface LanguageProviderProps {
	children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
	children,
}) => {
	const [language, setLanguage] = useState<Language>("vi");
	const toggleLanguage = (language: Language): void => {
		setLanguage(language);
	};
	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
