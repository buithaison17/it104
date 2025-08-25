import { Component } from "react";
import "../../styles/lession05.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ButtonAdd from "./ButtonAdd";
import Sort from "./Sort";
import Search from "./Search";
import TableItem from "./TableItem";

export default class Exercise05 extends Component {
	render() {
		return (
			<>
				<header className="header">
					<h1>Quản lí sinh viên</h1>
					<ButtonAdd></ButtonAdd>
				</header>
				<div className="d-flex justify-content-end w-100 mt-2 gap-3">
					<Sort></Sort>
					<Search></Search>
				</div>
				<table className="table mt-3">
					<thead>
						<tr>
							<td className="col-1">STT</td>
							<td>Mã sinh viên</td>
							<td>Tên sinh viên</td>
							<td>Ngày sinh</td>
							<td>Email</td>
							<td>Trạng thái</td>
							<td colSpan={3}>Chức năng</td>
						</tr>
					</thead>
					<tbody>
						<TableItem></TableItem>
						<TableItem></TableItem>
					</tbody>
				</table>
				<div className="d-flex align-items-center gap-3 mt-2 justify-content-end">
					<div className="page-prev-next">&lt;</div>
					<div className="d-flex align-items-center gap-3">
						<div className="btn-page">1</div>
						<div className="btn-page">2</div>
						<div className="btn-page">3</div>
					</div>
					<div className="page-prev-next">&gt;</div>
				</div>
			</>
		);
	}
}
