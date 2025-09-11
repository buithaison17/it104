import { useParams } from "react-router-dom";

export const Team = () => {
	const { id } = useParams();
	return (
		<div>
			<div>Chi tiết team</div>
			<div>ID: {id}</div>
		</div>
	);
};
