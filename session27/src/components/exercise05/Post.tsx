import { useNavigate } from "react-router-dom";

export interface Post {
	id: number;
	title: string;
	excerpt: string;
	content: string;
}

// eslint-disable-next-line react-refresh/only-export-components
export const initPost: Post[] = [
	{
		id: 1,
		title: "Bắt đầu với React",
		excerpt: "Giới thiệu React và cách khởi tạo dự án...",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed doloribus at accusantium assumenda beatae quo non maxime aspernatur, officia obcaecati alias nisi sit dolores possimus, adipisci, magnam totam dolor.",
	},
	{
		id: 2,
		title: "Sử dụng TailwindCSS",
		excerpt: "Tailwind giúp các bạn viết CSS nhanh và tiện lợi...",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed doloribus at accusantium assumenda beatae quo non maxime aspernatur, officia obcaecati alias nisi sit dolores possimus, adipisci, magnam totam dolor.",
	},
	{
		id: 3,
		title: "Giới thiệu về React Router",
		excerpt: "Điều hướng trong React với React Router Dom...",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed doloribus at accusantium assumenda beatae quo non maxime aspernatur, officia obcaecati alias nisi sit dolores possimus, adipisci, magnam totam dolor.",
	},
	{
		id: 4,
		title: "Quản lí state với Redux",
		excerpt: "Redux giúp quản lí state tập trung...",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed doloribus at accusantium assumenda beatae quo non maxime aspernatur, officia obcaecati alias nisi sit dolores possimus, adipisci, magnam totam dolor.",
	},
	{
		id: 5,
		title: "Hooks trong React",
		excerpt: "useState, useEffect và các Hooks phổ biến...",
		content:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sed doloribus at accusantium assumenda beatae quo non maxime aspernatur, officia obcaecati alias nisi sit dolores possimus, adipisci, magnam totam dolor.",
	},
];

export const Post = () => {
	const navigate = useNavigate();
	return (
		<div className="w-[75%] p-5">
			<h1 className="font-bold text-[20px] mb-4">Danh sách bài viết</h1>
			<div className="flex flex-col gap-4">
				{initPost.map((post) => (
					<div
						key={post.id}
						className="p-3 rounded-lg border border-gray-500 hover:cursor-default"
					>
						<div
							onClick={() => navigate(`${post.id}`)}
							className="text-[18px] text-blue-700 font-bold"
						>
							{post.title}
						</div>
						<div>{post.excerpt}</div>
					</div>
				))}
			</div>
		</div>
	);
};
