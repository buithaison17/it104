import axios from "axios";
import React, { useState } from "react";

export const Exercise01 = () => {
	const [file, setFile] = useState<File | null>(null);
	const [urlImage, setUrlImage] = useState<string | undefined>(undefined);
	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (e.target.files) setFile(e.target.files[0]);
	};
	const onUpload = async () => {
		if (!file) return;
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "demo_upload_file");
		const response = await axios.post(
			"https://api.cloudinary.com/v1_1/db4y1dgnp/image/upload",
			formData
		);
		setUrlImage(response.data.secure_url);
	};
	return (
		<div>
			<input onChange={handleUpload} type="file" />
			<button onClick={onUpload}>Upload</button>
			{urlImage && (
				<img
					src={urlImage}
					style={{
						width: "200px",
						height: "200px",
						display: "block",
						marginTop: "20px",
						objectFit: "cover",
						objectPosition: "center",
					}}
					alt=""
				/>
			)}
		</div>
	);
};
