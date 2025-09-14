export interface IDatatask {
	id: number;
	title: string;
	description: string;
}

export const tasks: IDatatask[] = [
	{
		id: 1,
		title: "Hoc React Router",
		description: "Lăm quen với Dynamic Routes và useNavigate",
	},
	{
		id: 2,
		title: "On lại Tailwind",
		description: "Thực hành tạo UI cơ bản bằng Tailwind CSS",
	},
	{
		id: 3,
		title: "Hoàn thành BTVN",
		description: "Đấy code lên GitHub và nộp link",
	},
];
