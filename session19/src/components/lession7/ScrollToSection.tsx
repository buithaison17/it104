import React, { useRef } from "react";
import "../../styles/lession7.css";

export const ScrollToSection: React.FC = () => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const handleScroll = () => {
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="scroll-wrapper">
			<button onClick={handleScroll} className="scroll-btn">
				Đi tới phần nội dung
			</button>
			<div className="long-content">
				{Array.from({ length: 20 }).map((_, i) => (
					<p key={i}>
						Đây là đoạn văn bản giả lập số {i + 1}. Nội dung này chỉ để tạo
						chiều dài trang và có thể cuộn xuống dưới.
					</p>
				))}
			</div>
			<div ref={targetRef} className="target-section">
				<h2>Đây là phần nội dung mục tiêu</h2>
			</div>
		</div>
	);
};
