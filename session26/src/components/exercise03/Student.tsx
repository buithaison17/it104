import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Student = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [input, setInput] = useState("");
	useEffect(() => {
		const studentName = searchParams.get("studentName");
		if (studentName) setInput(studentName);
	}, [searchParams]);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setInput(e.target.value);
	};
	const handleSearch = (): void => {
		if (input.trim()) {
			setSearchParams({ studentName: input });
		} else {
			setSearchParams({});
		}
	};
	return (
		<div>
			<input
				value={input}
				onChange={handleChange}
				type="text"
				placeholder="Nhập từ khóa tìm kiếm"
			/>
			<button onClick={handleSearch}>Tìm kiếm</button>
		</div>
	);
};
