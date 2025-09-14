import { useParams } from "react-router-dom";
import { initPost, type Post } from "./Post";

export const PostDetail = () => {
	const { id } = useParams();
	const posts: Post[] = initPost;
	const post = posts.find((post) => post.id === Number(id));
	return (
		<div className="p-4">
			<h1 className="font-bold text-[25px]">{post?.title}</h1>
			<div>{post?.content}</div>
		</div>
	);
};
