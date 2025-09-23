import { HeartOutlined } from "@ant-design/icons";
import "../styles/tailwind.css";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export const Exercise07 = () => {
	const state = useSelector((state: RootState) => state.listSlice);
	return (
		<div className="p-2 border w-[400px] m-auto mt-8">
			<h1 className="text-[20px] font-medium">List Favourote User</h1>
			<div className="mt-4 flex flex-col gap-4">
				{state.users.map((user) => (
					<div key={user.id} className="border-b pb-3">
						<div>UserName: {user.name}</div>
						<div>
							Favourite:
							<HeartOutlined style={user.isFavorite ? { color: "red" } : {}} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
