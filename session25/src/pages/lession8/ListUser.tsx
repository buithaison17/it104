import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface User {
	id: number;
	userName: string;
	email: string;
	address: string;
}

interface UserList {
	users: User[];
}

export const ListUser = () => {
	const navigate = useNavigate();
	const [userList] = useState<UserList>({
		users: [
			{
				id: 1,
				userName: "Nguyen Van A",
				email: "vana@example.com",
				address: "Hanoi",
			},
			{
				id: 2,
				userName: "Tran Thi B",
				email: "thib@example.com",
				address: "Ho Chi Minh City",
			},
			{
				id: 3,
				userName: "Le Van C",
				email: "vanc@example.com",
				address: "Da Nang",
			},
		],
	});
	return (
		<div className="w-[700px] grid grid-cols-3 gap-2">
			{userList.users.map((user) => (
				<div key={user.id} className="p-4 rounded-xl border border-gray-400">
					<div>ID: {user.id}</div>
					<div>UserName: {user.userName}</div>
					<div>Email: {user.email}</div>
					<div>Address: {user.address}</div>
					<button
						onClick={() =>
							navigate(
								`/user-detail/${user.id}/${user.userName}/${user.email}/${user.address}`
							)
						}
						className="w-full text-center border border-black mt-2"
					>
						Xem chi tiết
					</button>
				</div>
			))}
		</div>
	);
};
