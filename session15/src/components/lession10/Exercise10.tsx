import React, { Component } from "react";
import "../../styles/lession05.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ButtonAdd from "./ButtonAdd";
import Sort from "./Sort";
import Search from "./Search";
import TableItem from "./TableItem";
import ModalAdd from "./ModalAdd";
import ModalDelete from "./ModalDelete";

interface User {
	id: string;
	fullName: string;
	email: string;
	birthday: string;
	isActive: boolean;
}

interface StateType {
	users: User[];
	inputId: string;
	inputName: string;
	inputBirthday: string;
	inputEmail: string;
	isOpenModalAdd: boolean;
	isOpenModalDelete: boolean;
	isBlock: boolean;
	idAction: string;
}

export default class Exercise10 extends Component<object, StateType> {
	constructor(props: object) {
		super(props);
		this.state = {
			users: JSON.parse(localStorage.getItem("users") || "[]"),
			inputId: "",
			inputName: "",
			inputBirthday: "",
			inputEmail: "",
			isOpenModalAdd: false,
			isOpenModalDelete: false,
			isBlock: false,
			idAction: "",
		};
	}
	openModalAdd = (): void => {
		this.setState({ isOpenModalAdd: true });
	};
	closeModalAdd = (): void => {
		this.setState({ isOpenModalAdd: false });
	};
	openModalDelete = (id: string): void => {
		this.setState({ isOpenModalDelete: true, idAction: id });
	};
	closeModalDelete = (): void => {
		this.setState({ isOpenModalDelete: false });
	};
	handleRemove = (): void => {
		if (!this.state.isBlock) {
			const updateUsers = this.state.users.filter(
				(user) => user.id !== this.state.idAction
			);
			this.setState({
				users: updateUsers,
				isOpenModalDelete: false,
				idAction: "",
			});
			this.saveUser(updateUsers);
		} else {
			const updateUsers = this.state.users.map((user) =>
				user.id === this.state.idAction ? { ...user, isActive: false } : user
			);
			this.setState({
				users: updateUsers,
				isOpenModalDelete: false,
				idAction: "",
				isBlock: false,
			});
			this.saveUser(updateUsers);
		}
	};
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		this.setState({ ...this.state, [name]: value } as unknown as Pick<
			StateType,
			keyof StateType
		>);
	};
	resetInput = (): void => {
		this.setState({
			inputId: "",
			inputName: "",
			inputBirthday: "",
			inputEmail: "",
			idAction: "",
		});
	};
	onAdd = (): void => {
		const { inputId, inputName, inputBirthday, inputEmail, idAction, users } =
			this.state;
		if (
			!inputId.trim() ||
			!inputName.trim() ||
			!inputBirthday.trim() ||
			!inputEmail.trim()
		)
			return;
		if (idAction) {
			const user = users.find((u) => u.id === idAction);
			if (user) {
				if (
					users.some(
						(u) =>
							(u.id === inputId && u.id !== user.id) ||
							(u.email === inputEmail && u.email !== user.id)
					)
				)
					return;
			}
			const updateUsers = users.map((user) =>
				user.id === idAction
					? {
							id: inputId,
							fullName: inputName,
							birthday: inputBirthday,
							email: inputEmail,
							isActive: true,
					  }
					: user
			);
			this.setState({
				users: updateUsers,
				idAction: "",
				isOpenModalAdd: false,
			});
			this.saveUser(updateUsers);
		} else {
			if (users.some((u) => u.id === inputId || u.email === inputEmail)) return;
			const newUser: User = {
				id: inputId,
				fullName: inputName,
				birthday: inputBirthday,
				email: inputEmail,
				isActive: true,
			};
			const updateUsers = [newUser, ...users];
			this.setState({ users: updateUsers, isOpenModalAdd: false });
			this.saveUser(updateUsers);
		}
	};
	onEditUser = (user: User): void => {
		this.setState({
			isOpenModalAdd: true,
			idAction: user.id,
			inputBirthday: user.birthday,
			inputEmail: user.email,
			inputId: user.id,
			inputName: user.fullName,
		});
	};
	saveUser = (updateUsers: User[]): void => {
		localStorage.setItem("users", JSON.stringify(updateUsers));
	};
	render() {
		const {
			isOpenModalAdd,
			isOpenModalDelete,
			inputId,
			inputName,
			inputBirthday,
			inputEmail,
			users,
			isBlock,
			idAction,
		} = this.state;
		return (
			<>
				<header className="header">
					<h1>Quản lí sinh viên</h1>
					<ButtonAdd
						resetInput={this.resetInput}
						openModalAdd={this.openModalAdd}
					></ButtonAdd>
				</header>
				<div className="d-flex justify-content-end w-100 mt-2 gap-3">
					<Sort></Sort>
					<Search></Search>
				</div>
				<table className="table mt-3">
					<thead>
						<tr>
							<td className="col-1">STT</td>
							<td className="col-1">Mã sinh viên</td>
							<td className="col-3">Tên sinh viên</td>
							<td>Ngày sinh</td>
							<td className="col-2">Email</td>
							<td>Trạng thái</td>
							<td className="col-1" colSpan={3}>
								Chức năng
							</td>
						</tr>
					</thead>
					<tbody>
						{users.map((user, index) => (
							<TableItem
								user={user}
								key={user.id}
								index={index + 1}
								onEditUser={() => this.onEditUser(user)}
								onDeleteUser={() => this.openModalDelete(user.id)}
								onBlockUser={() =>
									this.setState({
										isBlock: true,
										isOpenModalDelete: true,
										idAction: user.id,
									})
								}
							></TableItem>
						))}
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
				{isOpenModalAdd && (
					<ModalAdd
						title={!idAction ? "Thêm sinh viên" : "Sửa sinh viên"}
						inputId={inputId}
						inputName={inputName}
						inputBirthday={inputBirthday}
						inputEmail={inputEmail}
						closeModalAdd={this.closeModalAdd}
						onAdd={this.onAdd}
						handleInput={this.handleInput}
					></ModalAdd>
				)}
				{isOpenModalDelete && (
					<ModalDelete
						title={isBlock ? "Chặn sinh viên" : "Xóa sinh viên"}
						content={
							isBlock
								? "Bạn có xác nhận chặn sinh viên này?"
								: "Bạn có xác nhận xóa sinh viên này?"
						}
						handleDelete={this.handleRemove}
						closeModalDelete={this.closeModalDelete}
					></ModalDelete>
				)}
			</>
		);
	}
}
