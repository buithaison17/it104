import { Modal } from "antd";
import type React from "react";

interface Props {
	isOpen: boolean;
	closeModal: () => void;
	onBlock: () => void;
}

export const ModalBlock: React.FC<Props> = ({
	isOpen,
	closeModal,
	onBlock,
}) => {
	return (
		<Modal
			title="Xác nhận"
			closable={{ "aria-label": "Custom Close Button" }}
			open={isOpen}
			onOk={onBlock}
			onCancel={closeModal}
		>
			<div className="text-center px-1 py-6 text-[18px] font-bold">
				Bạn có chắc chắn muốn ngừng xuất bản bài viết này?
			</div>
		</Modal>
	);
};
