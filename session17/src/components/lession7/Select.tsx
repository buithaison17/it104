import React, { useState } from "react";

export const Select = () => {
	const [city, setCity] = useState("");
	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		setCity(e.target.value);
	}
	return (
		<>
			<div>Thành phố: {city}</div>
			<select value={city} onChange={handleChange}>
				<option value="Hà Nội">Hà Nội</option>
				<option value="Hà Nam">Hà Nam</option>
				<option value="Thái Bình">Thái Bình</option>
			</select>
		</>
	);
};
