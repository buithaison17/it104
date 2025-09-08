import { Toast } from "react-bootstrap";

export const Exercise07 = () => {
	return (
		<div>
			<Toast>
				<Toast.Header>
					<img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
					<strong className="me-auto">Cảnh báo</strong>
				</Toast.Header>
				<Toast.Body>Lỗi kết nối tới máy chủ.</Toast.Body>
			</Toast>
		</div>
	);
};
