import { Button, TextField } from "@mui/material";
import type React from "react";

interface PropsType {
	handleChange: (value: string) => void;
	value: string;
}

const Toolbar: React.FC<PropsType> = ({ handleChange, value }) => {
	return (
		<div className="flex justify-between mb-4">
			<Button variant="contained" color="primary">
				Thêm mới sinh viên
			</Button>
			<div className="flex gap-2">
				<TextField
					size="small"
					placeholder="Search Here"
					value={value}
					onChange={(e) => handleChange(e.target.value)}
				/>
				<Button variant="contained">Tìm kiếm</Button>
				<Button variant="outlined">Sắp xếp</Button>
			</div>
		</div>
	);
};

export default Toolbar;
