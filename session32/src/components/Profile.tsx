import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const Profile = () => {
	const user = useSelector((state: RootState) => state.ex01);
	return (
		<div>
			<h1>Thông tin cá nhân</h1>
			<div>ID: {user.id}</div>
			<div>Họ và tên: {user.fullName}</div>
			<div>Giới tính: {user.gender}</div>
			<div>Ngày sinh: {user.birthday}</div>
			<div>Địa chỉ: {user.address}</div>
		</div>
	);
};
