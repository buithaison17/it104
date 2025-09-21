import type React from "react";

interface Props {
	input: { title: string; level: number };
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	closeModal: () => void;
	onAdd: () => void;
}

export const ModalAddEdit: React.FC<Props> = ({
	input,
	handleInput,
	closeModal,
	onAdd,
}) => {
	return (
		<div className="modal">
			<div onClick={closeModal} className="overlay">
				<div
					onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
					className="main-modal rounded-md shadow-md"
				>
					<div className="modal-header">
						<div className="text-[20px] font-medium">Thêm công việc mới</div>
						<div
							onClick={closeModal}
							className="text-[20px] font-medium cursor-pointer"
						>
							X
						</div>
					</div>
					<div className="modal-body mt-4">
						<div className="flex flex-col gap-2">
							<label htmlFor="name-task">Tên công việc</label>
							<input
								value={input.title}
								onChange={handleInput}
								className="border border-gray-300 rounded-md px-3 h-[30px] hover:border-blue-500"
								type="text"
								id="name-task"
								name="title"
							/>
						</div>
						<div className="flex flex-col gap-2 mt-4">
							<label htmlFor="level-task">Cấp độ</label>
							<div className="flex justify-between">
								<div>
									<input
										onChange={handleInput}
										value={0}
										checked={input.level === 0}
										type="radio"
										id="level-task"
										name="level"
									/>
									Khẩn cấp
								</div>
								<div>
									<input
										onChange={handleInput}
										value={1}
										checked={input.level === 1}
										type="radio"
										id="level-task"
										name="level"
									/>
									Quan trọng
								</div>
								<div>
									<input
										onChange={handleInput}
										value={2}
										checked={input.level === 2}
										type="radio"
										id="level-task"
										name="level"
									/>
									Bình thường
								</div>
								<div>
									<input
										onChange={handleInput}
										value={3}
										checked={input.level === 3}
										type="radio"
										id="level-task"
										name="level"
									/>
									Không quan trọng
								</div>
							</div>
						</div>
					</div>
					<div className="modal-footer mt-4">
						<button
							onClick={onAdd}
							className="w-full bg-blue-500 rounded-md text-white py-2"
						>
							Thêm mới
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
