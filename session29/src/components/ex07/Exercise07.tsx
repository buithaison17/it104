import axios from "axios";
import { useEffect, useState } from "react";

interface Student {
	id: number;
	fullName: string;
	email: string;
	address: string;
	phone: string;
}

export const Exercise07 = () => {
	const [students, setStudents] = useState<Student[]>();

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
					{students?.map((item) => (
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
								<button>Xóa</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
