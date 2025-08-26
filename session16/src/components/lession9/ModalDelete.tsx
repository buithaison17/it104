import React, { Component } from "react";

interface PropsType {
	closeModal: () => void;
	onDelete: () => void;
}

export default class ModalDelete extends Component<PropsType> {
	render() {
		return (
			<div className="modal">
				<div onClick={this.props.closeModal} className="overlay">
					<div
						onClick={(e: React.MouseEvent<HTMLDivElement>) =>
							e.stopPropagation()
						}
						className="content"
					>
						<div className="modal-head">
							<div>Xác nhận</div>
							<div onClick={this.props.closeModal}>X</div>
						</div>
						<div className="modal-main">
							Bạn có xác nhận xóa sản phẩm này khỏi giỏ hàng không?
						</div>
						<div className="modal-footer">
							<button onClick={this.props.closeModal}>Hủy</button>
							<button onClick={this.props.onDelete}>Xóa</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
