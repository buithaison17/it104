import React, { useEffect, useRef, useState } from "react";
import "../../styles/lession6.css";

export const Modal = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const targetRef = useRef<HTMLInputElement | null>(null);
	const openModal = () => {
		setIsOpenModal(true);
	};
	useEffect(() => {
		if (isOpenModal) {
			targetRef.current?.focus();
		}
	}, [isOpenModal]);
	const closeModal = () => setIsOpenModal(false);
	return (
		<div className="container">
			<div className="main">
				<h1>Ứng dụng React với Modal và Focus Input</h1>
				<button onClick={openModal}>Mở Modal</button>
			</div>
			{isOpenModal && (
				<div className="modal">
					<div onClick={closeModal} className="overlay">
						<div
							onClick={(e: React.MouseEvent<HTMLDivElement>) =>
								e.stopPropagation()
							}
							className="content"
						>
							<h1>Đăng nhập</h1>
							<input ref={targetRef} type="text" />
							<button onClick={closeModal}>Đóng</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};
