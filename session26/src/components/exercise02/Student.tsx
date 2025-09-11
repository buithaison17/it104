import { useParams } from "react-router-dom";

export const Student = () => {
	const { name } = useParams();
	return <div>{name}</div>;
};
