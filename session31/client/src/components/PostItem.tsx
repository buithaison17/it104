import type { Post } from "./ManagerPost";

interface Props {
	post: Post;
	index: number;
	handleBlock: () => void;
	handleDelete: () => void;
	handleEdit: () => void;
}

export const PostItem: React.FC<Props> = ({
	post,
	index,
	handleBlock,
	handleDelete,
	handleEdit,
}) => {
	return (
		<tr>
			<td className="px-3 py-2 border text-center">{index}</td>
			<td className="px-3 py-2 border">{post.title}</td>
			<td className="px-3 py-2 border">
				<div className=""></div>
				<img
					src={post.img}
					className="w-[60px] h-[60px] bg-black rounded-full m-auto object-cover object-center"
					alt=""
				/>
			</td>
			<td className="px-3 py-2 border text-center">{post.date}</td>
			<td className="px-3 py-2 border">
				<div className="px-2 py-1 border border-green-300 text-green-500 w-fit m-auto rounded-md">
					{post.publish ? "Đã xuất bản" : "Ngừng xuất bản"}
				</div>
			</td>
			<td className="px-3 py-2 border text-center">
				<button
					onClick={handleBlock}
					className="mr-5 px-2 py-1 bg-[#FAAD14] text-white rounded-md"
				>
					{post.publish ? "Chặn" : "Bỏ chặn"}
				</button>
				<button
					onClick={handleEdit}
					className="mr-5 px-2 py-1 bg-[#FFF7E6] border border-yellow-400 text-red-400 rounded-md"
				>
					Sửa
				</button>
				<button
					onClick={handleDelete}
					className="px-2 py-1 bg-[#FFF7E6] border border-red-500 text-red-500 rounded-md"
				>
					Xóa
				</button>
			</td>
		</tr>
	);
};
