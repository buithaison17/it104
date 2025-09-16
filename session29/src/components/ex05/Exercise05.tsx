import axios from "axios";

export const Exercise05 = () => {
	const getStudentById = async (id: number): Promise<void> => {
		const response = await axios.get(`http://localhost:3000/students/${id}`);
		console.log(response.data);
	};
	getStudentById(1);
	return <div>Exercise05</div>;
};
