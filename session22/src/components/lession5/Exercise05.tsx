import { CloseOutlined } from "@ant-design/icons";
import { Alert } from "react-bootstrap";

export const Exercise05 = () => {
	return (
		<div className="w-[400px] m-4">
			<Alert className="flex items-center justify-between">
				Thêm tài khoản mới thành công
				<CloseOutlined />
			</Alert>
			<Alert variant="danger" className="flex items-center justify-between">
				Thêm tài khoản mới thất bài
				<CloseOutlined />
			</Alert>
			<Alert variant="warning" className="flex items-center justify-between">
				Tên không được để trống
				<CloseOutlined />
			</Alert>
		</div>
	);
};
