import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";
import Toolbar from "../components/Toolbar";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Student } from "../utils/types";

const StudentManagement = () => {
	const students = useSelector((state: RootState) => state.studentReducer);
	const dispatch = useDispatch();
	const [isEdit, setIsEdit] = useState(false);
	const [idAction, setIdAction] = useState("");
	const [search, setSearch] = useState("");
	const fetchData = async () => {
		const response = await axios.get("http://localhost:8080/students");
		dispatch({ type: "SET_STUDENTS", payload: response.data });
	};
	const addStudent = async (student: Student) => {
		if (!isEdit) {
			await axios.post("http://localhost:8080/students", student);
			dispatch({ type: "ADD_STUDENT", payload: student });
		}
		{
			await axios.put(`http://localhost:8080/students/${idAction}`, student);
			dispatch({
				type: "EDIT_STUDENT",
				payload: { id: idAction, student: student },
			});
		}
		setIdAction("");
		setIsEdit(false);
	};
	const deleteStudent = async (id: string) => {
		console.log(id);
		let isConfirm = false;
		isConfirm = window.confirm("Bạn có có xác nhận xóa");
		if (isConfirm) {
			await axios.delete(`http://localhost:8080/students/${id}`);
			dispatch({ type: "DELETE_STUDENT", payload: id });
		}
	};
	const handleEdit = (id: string) => {
		setIdAction(id);
		setIsEdit(true);
	};
	const handleSearch = async (value: string) => {
		const response = await axios.get("http://localhost:8080/students");
		dispatch({ type: "SET_STUDENTS", payload: response.data });
		setSearch(value);
		if (value.trim()) {
			const datas = students.filter((s) =>
				s.name.toLowerCase().includes(search.toLowerCase())
			);
			dispatch({ type: "SET_STUDENTS", payload: datas });
		}
	};
	useEffect(() => {
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="flex gap-6 p-6">
			<div className="flex-1">
				<Toolbar handleChange={(value) => handleSearch(value)} value={search} />
				<StudentList
					students={students}
					deleteStudent={(id) => deleteStudent(id)}
					handleEdit={(id) => handleEdit(id)}
				/>
			</div>
			<StudentForm addStudent={addStudent} id={idAction} isEdit={isEdit} />
		</div>
	);
};

export default StudentManagement;
