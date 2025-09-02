import { createContext } from "react";

export type Language = "en" | "vi";

interface LanguageContextProps {
	language: Language;
	toggleLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextProps>({
	language: "vi",
	toggleLanguage: () => {},
});
