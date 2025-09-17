import { Modal } from "antd";
import type React from "react";

interface Props {
	inputEdit: string;
	isOpen: boolean;
	toggleModal: () => void;
	onEdit: () => void;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ModalEdit: React.FC<Props> = ({
	inputEdit,
	toggleModal,
	isOpen,
	onEdit,
	handleInput,
}) => {
	return (
		<Modal
			title="Sửa công việc"
			closable={{ "aria-label": "Custom Close Button" }}
			open={isOpen}
			onOk={onEdit}
			onCancel={toggleModal}
		>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="name-task-edit">Tên công việc</label>
				<input
					id="name-task-edit"
					value={inputEdit}
					onChange={handleInput}
					name="inputEdit"
					type="text"
					className="border-[1px] h-[35px] rounded-md p-3 w-full hover:border-blue-500"
					placeholder="Nhập tên công việc"
				/>
			</div>
		</Modal>
	);
};
