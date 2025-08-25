import React, { Component } from "react";

interface PropsType {
	title: string;
	content: string;
	closeModalDelete: () => void;
	handleDelete: () => void;
}

export default class ModalDelete extends Component<PropsType> {
	render() {
		return (
			<div className="modal-add">
				<div onClick={this.props.closeModalDelete} className="overlay">
					<div
						onClick={(e: React.MouseEvent<HTMLDivElement>) =>
							e.stopPropagation()
						}
						className="content"
					>
						<div className="modal-header">
							<div>{this.props.title}</div>
							<div onClick={this.props.closeModalDelete}>X</div>
						</div>
						<div className="modal-main">
							<h3>{this.props.content}</h3>
						</div>
						<div className="modal-footer mt-2">
							<button
								onClick={this.props.closeModalDelete}
								className="btn btn-light border-gray"
							>
								Hủy
							</button>
							<button onClick={this.props.handleDelete} className="btn btn-danger">Xác nhận</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
