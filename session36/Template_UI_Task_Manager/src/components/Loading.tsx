import { CircularProgress } from "@mui/material";

export const Loading = () => {
	return (
		<div className="fixed top-0 left-0 w-[100vw] h-[100vh] flex justify-center items-center bg-[rgba(0,0,0,0.3)]">
			<CircularProgress size="50px"/>
		</div>
	);
};
