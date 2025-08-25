import { Component } from "react";
import "../../styles/lession1.css";

export default class Exercise1 extends Component {
	render() {
		const subjects: string[] = ["Toán", "Văn", "Anh", "Lí", "Hóa", "Sinh"];
		return (
			<>
				<h1>Danh sách môn học</h1>
				<div className="group-item">
					{subjects.map((item) => (
						<div className="item">{item}</div>
					))}
				</div>
			</>
		);
	}
}
