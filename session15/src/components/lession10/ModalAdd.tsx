import React, { Component } from "react";
import "../../styles/lession10.css";

interface PropsType {
	title: string;
	closeModalAdd: () => void;
	inputId: string;
	inputName: string;
	inputBirthday: string;
	inputEmail: string;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onAdd?: () => void;
}

export default class ModalAdd extends Component<PropsType> {
	handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		this.props.handleInput(e);
	};
	render() {
		return (
			<>
				<div className="modal-add">
					<div className="overlay" onClick={this.props.closeModalAdd}>
						<div
							onClick={(e: React.MouseEvent<HTMLDivElement>) =>
								e.stopPropagation()
							}
							className="content"
						>
							<div className="modal-header">
								<div>{this.props.title}</div>
								<div onClick={this.props.closeModalAdd}>X</div>
							</div>
							<div className="modal-main">
								<div className="input-group">
									<label htmlFor="idStudent">Mã sinh viên</label>
									<input
										onChange={this.handleInput}
										value={this.props.inputId}
										name="inputId"
										className="input"
										id="idStudent"
										type="text"
									/>
								</div>
								<div className="input-group">
									<label htmlFor="nameStudent">Tên sinh viên</label>
									<input
										onChange={this.handleInput}
										value={this.props.inputName}
										name="inputName"
										className="input"
										id="nameStudent"
										type="text"
									/>
								</div>
								<div className="input-group">
									<label htmlFor="birthdayStudent">Ngày sinh</label>
									<input
										onChange={this.handleInput}
										value={this.props.inputBirthday}
										name="inputBirthday"
										className="input"
										id="birthdayStudent"
										type="date"
									/>
								</div>
								<div className="input-group">
									<label htmlFor="emailStudent">Email</label>
									<input
										onChange={this.handleInput}
										value={this.props.inputEmail}
										name="inputEmail"
										className="input"
										id="emailStudent"
										type="email"
									/>
								</div>
							</div>
							<div className="modal-footer mt-3">
								<button
									onClick={this.props.closeModalAdd}
									className="btn btn-light btn border-gray"
								>
									Hủy
								</button>
								<button onClick={this.props.onAdd} className="btn btn-primary">
									Thêm mới
								</button>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
