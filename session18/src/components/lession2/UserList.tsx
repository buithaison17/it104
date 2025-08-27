import { useMemo } from "react";

interface User {
	id: number;
	name: string;
	age: number;
}

const users: User[] = [
	{ id: 1, name: "An", age: 17 },
	{ id: 2, name: "Bình", age: 20 },
	{ id: 3, name: "Chi", age: 22 },
	{ id: 4, name: "Dung", age: 15 },
	{ id: 5, name: "Hà", age: 19 },
];

export const UserList = () => {
	const filteredUsers = useMemo(() => {
		return users.filter((user) => user.age > 18);
	}, []);
	return (
		<>
			<h3>Danh sách người dùng trên 18 tuổi</h3>
			<ul>
				{filteredUsers.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</>
	);
};
