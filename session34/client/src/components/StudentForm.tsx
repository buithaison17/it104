import {
	Button,
	MenuItem,
	Select,
	TextField,
	type SelectChangeEvent,
} from "@mui/material";

import type { Student } from "../utils/types";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

type InputChangeEvent = React.ChangeEvent<
	HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

interface Props {
	addStudent: (student: Student) => void;
	id: string;
	isEdit: boolean;
}

const StudentForm: React.FC<Props> = ({ addStudent, id, isEdit }) => {
	const students = useSelector((state: RootState) => state.studentReducer);
	const [form, setForm] = React.useState<Student>({
		id: "",
		name: "",
		age: 0,
		gender: "Nam",
		birthday: "",
		hometown: "",
		address: "",
	});

	useEffect(() => {
		if (isEdit) {
			const student = students.find((s) => s.id === id);
			if (student) {
				setForm({
					...form,
					id: student.id,
					name: student.name,
					age: student.age,
					gender: student.gender,
					birthday: student.birthday,
					hometown: student.hometown,
					address: student.address,
				});
			}
		}
	}, [isEdit]);

	const handleChange = (e: FormChangeEvent) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: name === "age" ? Number(value) : value });
	};

	const onSubmit = () => {
		if (!form.id.trim() || !form.name.trim() || form.age <= 0) return;
		const student: Student = {
			id: form.id.trim(),
			name: form.name.trim(),
			gender: form.gender,
			age: form.age,
			birthday: form.birthday,
			hometown: form.hometown,
			address: form.address,
		};
		addStudent(student);
		setForm({
			...form,
			id: "",
			name: "",
			gender: "Nam",
			age: 0,
			birthday: "",
			hometown: "",
			address: "",
		});
	};

	return (
		<div className="w-1/3 p-4 border rounded-xl shadow">
			<h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
			<div className="flex flex-col gap-4">
				<TextField
					label="Mã sinh viên"
					name="id"
					value={form.id}
					onChange={handleChange}
					fullWidth
				/>
				<TextField
					label="Tên sinh viên"
					name="name"
					value={form.name}
					onChange={handleChange}
					fullWidth
				/>
				<TextField
					label="Tuổi"
					name="age"
					type="number"
					value={form.age}
					onChange={handleChange}
					fullWidth
				/>
				<Select
					name="gender"
					value={form.gender}
					onChange={handleChange}
					fullWidth
				>
					<MenuItem value="Nam">Nam</MenuItem>
					<MenuItem value="Nữ">Nữ</MenuItem>
				</Select>
				<TextField
					type="date"
					label="Ngày sinh"
					name="birthday"
					value={form.birthday}
					onChange={handleChange}
					fullWidth
					InputLabelProps={{ shrink: true }}
				/>
				<TextField
					label="Nơi sinh"
					name="hometown"
					value={form.hometown}
					onChange={handleChange}
					fullWidth
				/>
				<TextField
					label="Địa chỉ"
					name="address"
					value={form.address}
					onChange={handleChange}
					fullWidth
				/>
				<Button onClick={onSubmit} variant="contained" color="primary">
					Submit
				</Button>
			</div>
		</div>
	);
};

export default StudentForm;
