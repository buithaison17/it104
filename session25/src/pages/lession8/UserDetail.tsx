import { useParams } from "react-router-dom";

export const UserDetail = () => {
	const { id, username, email, address } = useParams();
	return (
		<div>
			<h1 className="text-[20px] font-bold">Thông tin chi tiết</h1>
			<div className="p-4 w-fit mt-2 rounded-xl border border-gray-400">
				<div>ID: {id}</div>
				<div>UserName: {username}</div>
				<div>Email: {email}</div>
				<div>Address: {address}</div>
			</div>
		</div>
	);
};
