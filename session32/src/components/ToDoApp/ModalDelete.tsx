interface Props {
	closeModal: () => void;
	onDelete: () => void;
}

export const ModalDelete: React.FC<Props> = ({ closeModal, onDelete }) => {
	return (
		<div className="modal">
			<div onClick={closeModal} className="overlay">
				<div
					onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
					className="main-modal rounded-md shadow-md"
				>
					<div className="modal-header">
						<div className="text-[20px] font-medium">Xác nhận</div>
						<div
							onClick={closeModal}
							className="text-[20px] font-medium cursor-pointer"
						>
							X
						</div>
					</div>
					<div className="modal-body mt-4">
						<div>Bạn có chắc chắn xóa công việc này không?</div>
					</div>
					<div className="modal-footer mt-4 flex gap-3 justify-end">
						<button
							onClick={closeModal}
							className="px-2 py-1 border rounded-md"
						>
							Hủy
						</button>
						<button
							onClick={onDelete}
							className="px-2 py-1 border rounded-md bg-red-500 text-white"
						>
							Xóa
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
