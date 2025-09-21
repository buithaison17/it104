import { Input } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { PostItem } from "./PostItem";
import { ModalBlock } from "./ModalBlock";
import { ModalAddEdit } from "./ModalAddEdit";
import "../styles/ModalAddEdit.css";
import { ModalDelete } from "./ModalDelete";

export interface Post {
	id: string;
	title: string;
	img: string;
	date: string;
	content: string;
	publish: boolean;
	status: boolean;
}

export const ManagerPost = () => {
	const [posts, setPosts] = useState<Post[]>([]);
	const [inputState, setInputState] = useState({
		title: "",
		img: "",
		content: "",
	});
	const [idAction, setIdAction] = useState("");
	const [isOpenModalAddEdit, setIsOpenModalAddEdit] = useState(false);
	const [isOpenModalBlock, setIsOpenModalBlock] = useState(false);
	const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);
	const [isEdit, setIsEdit] = useState(false);
	const fetchData = async () => {
		const response = await axios.get("http://localhost:3000/posts");
		setPosts(response.data);
	};
	useEffect(() => {
		fetchData();
	}, []);
	const toggleModalAddEdit = (id?: string) => {
		if (isOpenModalAddEdit) {
			setIsOpenModalAddEdit(false);
			setInputState({ ...inputState, title: "", img: "", content: "" });
			setIsEdit(false);
		} else {
			setIsOpenModalAddEdit(true);
			setIdAction(id!);
		}
	};
	const toggleModalBlock = (id?: string): void => {
		if (isOpenModalBlock) {
			setIsOpenModalBlock(false);
		} else {
			setIsOpenModalBlock(true);
			setIdAction(id || "");
		}
	};
	const toggleModalDelete = (id?: string): void => {
		if (isOpenModalDelete) {
			setIsOpenModalDelete(false);
		} else {
			setIsOpenModalDelete(true);
			setIdAction(id || "");
		}
	};
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value } = e.target;
		setInputState({ ...inputState, [name]: value });
	};
	const handleContent = (value: string) => {
		setInputState({ ...inputState, content: value });
	};
	const handleEdit = (id?: string): void => {
		setIsEdit(true);
		toggleModalAddEdit(id);
		const post = posts.find((p) => p.id === id);
		if (post)
			setInputState({
				...inputState,
				title: post.title,
				img: post.img,
				content: post.content,
			});
	};
	const handleFiltered = async (e: React.ChangeEvent<HTMLSelectElement>) => {
		const response = await axios.get("http://localhost:3000/posts");
		let data: Post[] = response.data;
		if (e.target.value) {
			if (e.target.value === "public") {
				data = data.filter((p) => p.publish === true);
			} else {
				data = data.filter((p) => p.publish === false);
			}
		}
		setPosts(data);
	};
	const getToday = (): string => {
		const date = new Date();
		const day = date.getDay();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	};
	const onAdd = async () => {
		if (
			!inputState.content.trim() ||
			!inputState.title.trim() ||
			!inputState.img.trim()
		)
			return;
		if (!isEdit) {
			const post: Post = {
				id: String(posts.length + 1),
				title: inputState.title,
				img: inputState.img,
				content: inputState.content,
				date: getToday(),
				publish: true,
				status: false,
			};
			await axios.post("http://localhost:3000/posts", post);
			await fetchData();
		} else {
			const post = posts.find((p) => p.id === idAction);
			if (post) {
				post.title = inputState.title;
				post.img = inputState.img;
				post.content = inputState.content;
			}
			await axios.put(`http://localhost:3000/posts/${idAction}`, post);
			await fetchData();
		}
		toggleModalAddEdit();
	};
	const onBlock = async () => {
		const post = posts.find((p) => p.id === idAction);
		if (post) post.publish = !post.publish;
		await axios.put(`http://localhost:3000/posts/${idAction}`, post);
		await fetchData();
		toggleModalBlock();
	};
	const onDelete = async () => {
		await axios.delete(`http://localhost:3000/posts/${idAction}`);
		await fetchData();
		toggleModalDelete();
	};
	return (
		<div className="container m-auto p-4">
			<div className="flex justify-between">
				<div className="flex gap-3">
					<Input
						placeholder="Nhập từ khóa tìm kiếm"
						className="w-[300px]"
					></Input>
					<select
						onChange={handleFiltered}
						className="w-[250px] border rounded-md hover:border-blue-500 px-2"
					>
						<option value="">Lọc bài viết</option>
						<option value="public">Đã xuất bản</option>
						<option value="private">Ngừng xuất bản</option>
					</select>
				</div>
				<button
					onClick={() => toggleModalAddEdit()}
					className="px-2 py-1 bg-blue-600 rounded-md text-white"
				>
					Thêm mới bài viết
				</button>
			</div>
			<table className="table-auto w-full mt-4">
				<thead>
					<tr className="bg-[#F5F5F5]">
						<th className="px-3 py-2 border w-[60px]">STT</th>
						<th className="px-3 py-2 border text-left	">Tiêu đề</th>
						<th className="px-3 py-2 border">Hình ảnh</th>
						<th className="px-3 py-2 border">Ngày viết</th>
						<th className="px-3 py-2 border">Trạng thái</th>
						<th className="px-3 py-2 border w-[250px]">Chức năng</th>
					</tr>
				</thead>
				<tbody>
					{posts.map((post, index) => (
						<PostItem
							key={post.id}
							post={post}
							index={index + 1}
							handleBlock={() => toggleModalBlock(post.id)}
							handleDelete={() => toggleModalDelete(post.id)}
							handleEdit={() => handleEdit(post.id)}
						></PostItem>
					))}
				</tbody>
			</table>
			<ModalBlock
				isOpen={isOpenModalBlock}
				closeModal={toggleModalBlock}
				onBlock={onBlock}
			></ModalBlock>
			<ModalDelete
				isOpen={isOpenModalDelete}
				closeModal={toggleModalDelete}
				onDelete={onDelete}
			></ModalDelete>
			{isOpenModalAddEdit && (
				<ModalAddEdit
					closeModal={toggleModalAddEdit}
					handleInput={handleInput}
					handleContent={handleContent}
					onAdd={onAdd}
					input={inputState}
				></ModalAddEdit>
			)}
		</div>
	);
};
