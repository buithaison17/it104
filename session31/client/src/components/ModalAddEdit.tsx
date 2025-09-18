import MDEditor from "@uiw/react-md-editor";
import { Button, Input } from "antd";
import type React from "react";

interface Props {
	closeModal: () => void;
	handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleContent: (value: string) => void;
	onAdd: () => void;
	input: { title: string; img: string; content: string };
}

export const ModalAddEdit: React.FC<Props> = ({
	closeModal,
	handleInput,
	handleContent,
	onAdd,
	input,
}) => {
	return (
		<div className="modal">
			<div className="overlay">
				<div className="main-modal rounded-lg p-4 border shadow-md">
					<div className="modal-header">
						<div className="font-bold text-[20px]">Thêm bài viết mới</div>
						<div
							onClick={closeModal}
							className="font-bold text-[20px] cursor-pointer"
						>
							X
						</div>
					</div>
					<div className="mt-4">
						<div className="flex flex-col gap-1">
							<label className="font-bold" htmlFor="name-post">
								Tên bài viết
							</label>
							<Input
								onChange={handleInput}
								value={input.title}
								name="title"
								type="text"
								id="name-post"
							></Input>
						</div>
						<div className="flex flex-col gap-1 mt-4">
							<label className="font-bold" htmlFor="img-post">
								Hình ảnh
							</label>
							<Input
								onChange={handleInput}
								value={input.img}
								name="img"
								type="text"
								id="img-post"
							></Input>
						</div>
						<div className="flex flex-col gap-1 mt-4">
							<label className="font-bold" htmlFor="content-post">
								Nội dung
							</label>
							<MDEditor
								value={input.content}
								onChange={(val) => handleContent(val || "")}
							/>
						</div>
					</div>
					<div className="flex gap-3 mt-4 justify-end">
						<Button>Làm mới</Button>
						<Button onClick={onAdd} type="primary">
							Xuất bản
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
