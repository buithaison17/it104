import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const ListUser = () => {
	const users = useSelector((state: RootState) => state.ex02);
	return (
		<table className="table-auto w-[800px] m-auto mt-8">
			<thead>
				<tr>
					<td className="p-2 border text-center">ID</td>
					<td className="p-2 border">Tên</td>
					<td className="p-2 border">Giới tính</td>
					<td className="p-2 border">Ngày sinh</td>
					<td className="p-2 border">Địa chỉ</td>
					<td className="p-2 border" colSpan={2}>
						Chức năng
					</td>
				</tr>
			</thead>
			<tbody>
				{users.map((user) => (
					<tr key={user.id}>
						<td className="p-2 border text-center">{user.id}</td>
						<td className="p-2 border text-center">{user.fullName}</td>
						<td className="p-2 border">{user.gender}</td>
						<td className="p-2 border text-center">{user.birthday}</td>
						<td className="p-2 border text-center">{user.address}</td>
						<td className="p-2 border text-center">
							<button>Sửa</button>
						</td>
						<td className="p-2 border text-center">
							<button>Xóa</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
