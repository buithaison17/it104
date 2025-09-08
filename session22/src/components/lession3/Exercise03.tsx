import { Button, Card } from "react-bootstrap";

export const Exercise03 = () => {
	return (
		<div className="flex item-center gap-3 m-[25px]">
			<Card style={{ width: "18rem" }} className="text-center">
				<Card.Img
					variant="top"
					src="https://vietbis.vn/Image/Picture/Laptop/macbook-air-2018.jpg"
					className="aspect-[4/3]"
				/>
				<Card.Body>
					<Card.Title>MacBook Air 2018</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Card.Text>
					<div className="flex items-center gap-3">
						<Button variant="primary">Xem chi tiết</Button>
						<div>30.000.000 đ</div>
					</div>
				</Card.Body>
			</Card>
			<Card style={{ width: "18rem" }} className="text-center">
				<Card.Img
					variant="top"
					src="https://laptoptld.com/wp-content/uploads/2023/07/20230311_140122.jpg"
					className="aspect-[4/3]"
				/>
				<Card.Body>
					<Card.Title>MacBook Pro 2019</Card.Title>
					<Card.Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</Card.Text>
					<div className="flex items-center gap-3">
						<Button variant="primary">Xem chi tiết</Button>
						<div>30.000.000 đ</div>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
};
