import { Form } from "react-bootstrap";

export const Exercise08 = () => {
	return (
		<form className="w-[800px] m-auto bg-slate-500">
			<h1 className="text-center">Đăng kí tài khoản</h1>
			<div className="flex gap-4 justify-center">
				<div>
					<label htmlFor="">Email</label>
					<Form.Control
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						type="email"
						placeholder="Nhập email"
						width={2000}
					/>
				</div>
				<div>
					<label htmlFor="">Mật khẩu</label>
					<Form.Control
						aria-label="Default"
						aria-describedby="inputGroup-sizing-default"
						type="password"
						placeholder="Nhập mật khẩu"
					/>
				</div>
				<div></div>
			</div>
		</form>
	);
};
