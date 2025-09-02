import { useState } from "react";

const quotes = [
	"Học, học nữa, học mãi.",
	"Thất bại là mẹ thành công.",
	"Không gì là không thể.",
	"Kiến tha lâu đầy tổ.",
	"Muốn đi nhanh hãy đi một mình, muốn đi xa hãy đi cùng nhau.",
];

export const RandomQuote = () => {
	const [quoteState, setQuote] = useState(quotes[0]);
	const handleNewQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setQuote(quotes[randomIndex]);
	};
	return (
		<div
			style={{
				width: "450px",
				padding: "20px",
				textAlign: "center",
				display: "flex",
				flexDirection: "column",
				gap: "10px",
				margin: "auto",
			}}
		>
			<div style={{ fontSize: "25px" }}>
				Câu nói truyền cảm hứng hôm nay là:{" "}
			</div>
			<div>"{quoteState}"</div>
			<button
				onClick={handleNewQuote}
				style={{
					width: "120px",
					margin: "auto",
					padding: "10px",
					backgroundColor: "#007BFF",
					color: "white",
					borderStyle: "none",
					borderRadius: "10px",
				}}
			>
				Lấy câu nói mới
			</button>
		</div>
	);
};
