import { Spinner } from "react-bootstrap";

export const Exercise06 = () => {
	return (
		<div className="flex flex-col gap-3 m-3">
			<Spinner animation="border" variant="primary" />
			<Spinner animation="border" variant="secondary" />
			<Spinner animation="border" variant="success" />
		</div>
	);
};
