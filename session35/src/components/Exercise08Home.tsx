import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { logoutUser } from "../store/loginReducer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Exercise08Home = () => {
	const stateUser = useSelector((state: RootState) => state.loginReducer);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		if (!stateUser.currentUser) navigate("/login");
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<div className="w-[400px] p-3 rounded-md m-auto flex flex-col gap-3 mt-4">
			<div>User name: {stateUser.currentUser?.name}</div>
			<div>Email: {stateUser.currentUser?.email}</div>
			<button
				onClick={() => {
					dispatch(logoutUser());
					navigate("/login");
				}}
				className="w-full p-1 rounded-md border"
			>
				Đăng xuất
			</button>
		</div>
	);
};
