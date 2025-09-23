import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import type React from "react";
import { setLanguage, type Language } from "../store/setLanguage";

export const Exercise06 = () => {
	const state = useSelector((state: RootState) => state.setLanguage);
	const dispatch = useDispatch();
	const handleSetLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		const value: string = e.target.value;
		const valueConvert: Language =
			value === "vietnamese" ? "vietnamese" : "english";
		dispatch(setLanguage(valueConvert));
	};
	return (
		<div>
			<select onChange={handleSetLanguage}>
				<option selected={state.language === "english"} value="english">
					English
				</option>
				<option selected={state.language === "vietnamese"} value="vietnamese">
					Vietnamese
				</option>
			</select>
			<div>
				{state.language === "vietnamese" ? "Học viện Rikkei" : "Rikkei Academy"}
			</div>
		</div>
	);
};
