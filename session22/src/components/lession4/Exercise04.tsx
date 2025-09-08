import { Button, Dropdown, Space, type MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const items: MenuProps["items"] = [
	{
		key: "1",
		label: "Cài đặt",
	},
	{
		key: "2",
		label: "Đổi mật khẩu",
	},
	{
		key: "3",
		label: "Đăng xuất",
	},
];

export const Exercise04 = () => {
	return (
		<Dropdown menu={{ items }}>
			<Button>
				<Space>
					Bùi Thái Sơn
					<DownOutlined />
				</Space>
			</Button>
		</Dropdown>
	);
};
