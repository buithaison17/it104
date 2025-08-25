import { Component } from "react";

interface Post {
	id: number;
	title: string;
	content: string;
	author: string;
}

interface PropsType {
	item: Post;
}

export default class DetailPost extends Component<PropsType> {
	render() {
		return (
			<div
				style={{
					fontSize: "18px",
					fontWeight: "600",
					borderBottom: "2px solid gray",
					width: "100%",
				}}
			>
				<p>ID: {this.props.item.id}</p>
				<p>Title: {this.props.item.title}</p>
				<p>Content: {this.props.item.content}</p>
				<p>Author: {this.props.item.author}</p>
			</div>
		);
	}
}
