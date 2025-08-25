import { Component } from "react";
import DetailPost from "./DetailPost ";

interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
}

const list: Post[] = [
	{
		id: 1,
		title: "Tại sao nên học ReactJs",
		content: "Học để đi làm",
		author: "David",
	},
	{
		id: 2,
		title: "Props trong ReactJs",
		content: "Truyền dữ liệu từ component cha xuống component con",
		author: "Linda",
	},
	{
		id: 3,
		title: "State trong ReactJs",
		content: "Lưu trữ trạng thái trong component",
		author: "David",
	},
];

export default class ListPost extends Component {
	render() {
		return (
			<>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						height: "fit-content",
						width: "fit-content",
						padding: "15px",
						margin: "0 auto",
					}}
				>
					<h1>Danh sách bài viết</h1>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "flex-start",
							textAlign: "left",
						}}
					>
						{list.map(item => <DetailPost key={item.id} item={item}></DetailPost>)}
					</div>
				</div>
			</>
		);
	}
}
