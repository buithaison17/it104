import { Component } from "react";

interface User {
	id: string;
	fullName: string;
	email: string;
	birthday: string;
	isActive: boolean;
}

interface PropsType {
	user: User;
	index: number;
	onEditUser: (user: User) => void;
	onDeleteUser: () => void;
	onBlockUser: () => void;
}

export default class TableItem extends Component<PropsType> {
	render() {
		const { user, index } = this.props;
		return (
			<>
				<tr>
					<td>{index}</td>
					<td>{user.id}</td>
					<td>{user.fullName}</td>
					<td>{user.birthday}</td>
					<td>{user.email}</td>
					<td>
						<div className={user.isActive ? "active" : "unactive"}>
							{user.isActive ? "Đang hoạt động" : "Không hoạt động"}
						</div>
					</td>
					<td>
						<button onClick={this.props.onBlockUser} className="table-btn btn-block">Chặn</button>
					</td>
					<td>
						<button
							onClick={() => this.props.onEditUser(user)}
							className="table-btn btn-edit"
						>
							Sửa
						</button>
					</td>
					<td>
						<button
							onClick={this.props.onDeleteUser}
							className="table-btn btn-remove"
						>
							Xóa
						</button>
					</td>
				</tr>
			</>
		);
	}
}
