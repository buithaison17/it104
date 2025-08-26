import type React from "react";
import { ToDoInput } from "./ToDoInput";

interface Props {
	value: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	closeModalEdit: () => void;
	onSave: () => void;
}

export const ModalEdit: React.FC<Props> = ({
	value,
	handleChange,
	closeModalEdit,
	onSave,
}) => {
	return (
		<div className="modal">
			<div className="overlay">
				<div className="content">
					<div className="modal-head">
						<div>Cập nhật công việc</div>
						<div onClick={closeModalEdit}>X</div>
					</div>
					<div className="modal-main">
						<label htmlFor="">Tên công việc</label>
						<ToDoInput
							handleInput={handleChange}
							value={value}
							name="editContent"
						></ToDoInput>
					</div>
					<div className="modal-footer">
						<button onClick={closeModalEdit}>Hủy</button>
						<button onClick={onSave}>Đồng ý</button>
					</div>
				</div>
			</div>
		</div>
	);
};
