import { Modal } from "antd";
import type React from "react";

interface Props {
	isOpen: boolean;
	toggleModal: () => void;
	onDelete: () => void;
	id: number;
}

export const ModalDelete: React.FC<Props> = ({
	isOpen,
	toggleModal,
	onDelete,
	id,
}) => {
	return (
		<Modal
			title="Xóa sinh viên"
			closable={{ "aria-label": "Custom Close Button" }}
			open={isOpen}
			onOk={onDelete}
			onCancel={toggleModal}
		>
			<div className="py-6 text-[20px]">
				Bạn có chắc chắn muốn xóa sinh viên {id}
			</div>
		</Modal>
	);
};
