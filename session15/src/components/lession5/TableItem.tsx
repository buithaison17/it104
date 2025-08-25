import { Component } from "react";

export default class TableItem extends Component {
	render() {
		return (
			<>
				<tr>
					<td>1</td>
					<td>123</td>
					<td>Bùi Thái Sơn</td>
					<td>17/01/2006</td>
					<td>thaisonb936@gmail.com</td>
					<td>
						<div className="active">Đang hoạt động</div>
					</td>
					<td>
						<button className="table-btn btn-block">Chặn</button>
					</td>
					<td>
						<button className="table-btn btn-edit">Sửa</button>
					</td>
					<td>
						<button className="table-btn btn-remove">Xóa</button>
					</td>
				</tr>
			</>
		);
	}
}
