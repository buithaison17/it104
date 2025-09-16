import axios from "axios";
import { useEffect } from "react";

export const Exercise06 = () => {
	useEffect(() => {
		const createStudent = async (): Promise<void> => {
			const response = await axios.post("http://localhost:3000/students", {
				id: 6,
				student_name: "Sinh viên mới",
				email: "newstudent@example.com",
				address: "Hà Nội",
				phone: "0900000000",
				status: true,
				created_at: new Date().toISOString(),
			});
			console.log(response.data);
		};
		createStudent();
	}, []);
	return <div>Exercise06</div>;
};
