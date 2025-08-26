import type React from "react";

interface Props {
	closeModalDelete: () => void;
	onRemove: () => void;
}

export const ModalDelete: React.FC<Props> = ({
	closeModalDelete,
	onRemove,
}) => {
	return (
		<div className="modal">
			<div className="overlay">
				<div className="content">
					<div className="modal-head">
						<div>Xác nhận</div>
						<div onClick={closeModalDelete}>X</div>
					</div>
					<div className="modal-main">Bạn có chắc chắn muốn xóa?</div>
					<div className="modal-footer">
						<button onClick={closeModalDelete}>Hủy</button>
						<button onClick={onRemove}>Đồng ý</button>
					</div>
				</div>
			</div>
		</div>
	);
};
