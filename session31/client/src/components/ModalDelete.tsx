import { Modal } from "antd";
import type React from "react";

interface Props {
	isOpen: boolean;
	closeModal: () => void;
	onDelete: () => void;
}

export const ModalDelete: React.FC<Props> = ({
	isOpen,
	closeModal,
	onDelete,
}) => {
	return (
		<Modal
			title="Xác nhận"
			closable={{ "aria-label": "Custom Close Button" }}
			open={isOpen}
			onOk={onDelete}
			onCancel={closeModal}
		>
			<div className="text-center px-1 py-6 text-[18px] font-bold">
				Bạn có chắc chắn muốn xóa bài viết này?
			</div>
		</Modal>
	);
};
