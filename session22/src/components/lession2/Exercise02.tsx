import { Form, InputGroup } from "react-bootstrap";

export const Exercise02 = () => {
	return (
		<div className="w-[300px] m-[20px]">
			<InputGroup size="sm" className="mb-3">
				<Form.Control
					placeholder="Input cỡ nhỏ"
					aria-label="Small"
					aria-describedby="inputGroup-sizing-sm"
				/>
			</InputGroup>
			<br />
			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Input cỡ trung bình"
					aria-label="Default"
					aria-describedby="inputGroup-sizing-default"
				/>
			</InputGroup>
			<br />
			<InputGroup size="lg">
				<Form.Control
					placeholder="Input cỡ lớn"
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
				/>
			</InputGroup>
		</div>
	);
};
