import axios from "axios";

export const Exercise04 = () => {
	const getAllStudent = async (): Promise<void> => {
		const response = await axios.get("http://localhost:3000/students");
		console.log(response.data);
	};
	getAllStudent();
	return <div>Exercise04</div>;
};
