import { useState } from "react";
import "../../styles/lession10.css";
import { ProgressBar } from "./ProgressBar";

interface Data {
	id: number;
	title: string;
	description: string;
}

const initialUnRead: Data[] = [
	{ id: 1, title: "Tìm hiểu và JavaScript ES6", description: "JavaScript" },
	{ id: 2, title: "Hiểu về React Hooks", description: "ReactJS" },
	{ id: 3, title: "Lập trình TypeScript cơ bản", description: "TypeScript" },
	{ id: 4, title: "Quản lý state với Redux Toolkit", description: "Redux" },
	{ id: 5, title: "Kết nối API bằng Axios", description: "REST API" },
];

export const Exercise10 = () => {
	const [datasUnRead, setDatasUnRead] = useState<Data[]>(initialUnRead);
	const [datasRead, setDatasRead] = useState<Data[]>([]);
	const handleToRead = (id: number): void => {
		const temp = datasUnRead.find((data) => data.id === id);
		if (temp) {
			setDatasUnRead(datasUnRead.filter((data) => data.id !== id));
			setDatasRead([...datasRead, temp]);
		}
	};
	const handleToUnRead = (id: number): void => {
		const temp = datasRead.find((data) => data.id === id);
		if (temp) {
			setDatasRead(datasRead.filter((data) => data.id !== id));
			setDatasUnRead([...datasUnRead, temp]);
		}
	};
	return (
		<div className="container">
			<h1>Quản lí bài viết</h1>
			<ProgressBar
				read={datasRead.length}
				totalArticle={initialUnRead.length}
			></ProgressBar>
			<div className="article-unread">
				<div className="article-unread-header">
					<div className="title">Bài viết chưa đọc</div>
					<div className="number-article-unread">{datasUnRead.length}</div>
				</div>
				{datasUnRead.map((data) => (
					<div key={data.id} className="article">
						<div className="article-infor">
							<div className="article-name">{data.title}</div>
							<div className="subject">{data.description}</div>
						</div>
						<button
							onClick={() => handleToRead(data.id)}
							className="btn-mark-read"
						>
							Đánh dấu đã đọc
						</button>
					</div>
				))}
			</div>
			<div className="article-unread">
				<div className="article-unread-header">
					<div className="title">Bài viết đã đọc</div>
					<div className="number-article-read">{datasRead.length}</div>
				</div>
				{datasRead.map((data) => (
					<div key={data.id} className="article">
						<div className="article-infor">
							<div className="article-name">{data.title}</div>
							<div className="subject">{data.description}</div>
						</div>
						<button
							onClick={() => handleToUnRead(data.id)}
							className="btn-mark-unread"
						>
							Đánh dấu chưa đọc
						</button>
					</div>
				))}
			</div>
		</div>
	);
};
