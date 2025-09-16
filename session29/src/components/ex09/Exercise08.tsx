import axios from "axios";
import { useEffect, useState } from "react";
import { ModalDelete } from "../ex10/ModalDelete";
import { Pagination } from "antd";

interface Student {
	id: number;
	fullName: string;
	email: string;
	address: string;
	phone: string;
}

export const Exercise08 = () => {
	const [students, setStudents] = useState<Student[]>();
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [idAction, setIdAction] = useState(-1);
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize: number = 5;
	const toggleModalDelete = (id: number): void => {
		if (isOpenModalDelete) {
			setIsOpenModalDelete(false);
		} else {
			setIsOpenModalDelete(true);
			setIdAction(id);
		}
	};
	const onDelete = async () => {
		try {
			await axios.delete(`http://localhost:3000/students/${idAction}`);
			setStudents(students?.filter((s) => s.id !== idAction));
			toggleModalDelete(-1);
		} catch {
			console.log("Lỗi");
		}
	};
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3000/students");
				setStudents(response.data);
			} catch {
				console.log("Lỗi");
			}
		};
		fetchData();
	}, []);
	return (
		<div>
			<header className="flex justify-between p-4 bg-[#435D7D]">
				<h1 className="text-white text-[25px]">Quản lý sinh viên</h1>
				<button className="px-2 py-1 bg-[#28A745] text-white">
					Thêm sinh viên mới
				</button>
			</header>
			<table className="table-auto w-full mt-4 text-left">
				<thead>
					<tr>
						<th></th>
						<th>Tên sinh viên</th>
						<th>Email</th>
						<th>Địa chỉ</th>
						<th>Số điện thoại</th>
						<th colSpan={2}>Lựa chọn</th>
					</tr>
				</thead>
				<tbody>
					{students
						?.slice((currentPage - 1) * pageSize, currentPage * pageSize)
						.map((item) => (
							<tr key={item.id}>
								<td className="p-2">
									<input type="checkbox" />
								</td>
								<td className="p-2">{item.fullName}</td>
								<td className="p-2">{item.email}</td>
								<td className="p-2">{item.address}</td>
								<td className="p-2">{item.phone}</td>
								<td className="p-2">
									<button>Sửa</button>
								</td>
								<td className="p-2">
									<button onClick={() => toggleModalDelete(item.id)}>
										Xóa
									</button>
								</td>
							</tr>
						))}
				</tbody>
			</table>
			<Pagination
				className="flex justify-end mt-4"
				defaultCurrent={currentPage}
				onChange={(page) => setCurrentPage(page)}
				pageSize={pageSize}
				total={students?.length}
			/>
			<ModalDelete
				isOpen={isOpenModalDelete}
				toggleModal={() => toggleModalDelete(-1)}
				onDelete={onDelete}
				id={idAction}
			></ModalDelete>
		</div>
	);
};
