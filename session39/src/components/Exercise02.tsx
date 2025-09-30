import axios from "axios";
import React, { useState } from "react";

export const Exercise02 = () => {
	const [files, setFiles] = useState<File[]>([]);
	const [urls, setUrls] = useState<string[]>([]);
	const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (e.target.files) setFiles([...e.target.files]);
	};
	const onUpload = async () => {
		if (files.length == 0) return;
		const uploadPromise = files.map((file) => {
			const formData = new FormData();
			formData.append("file", file);
			formData.append("upload_preset", "demo_upload_file");
			return axios.post(
				"https://api.cloudinary.com/v1_1/db4y1dgnp/image/upload",
				formData
			);
		});
		const responses = await Promise.all(uploadPromise);
		const uploadedUrls = responses.map((response) => response.data.secure_url);
		setUrls(uploadedUrls);
	};
	return (
		<div>
			<input onChange={handleUpload} type="file" multiple />
			<button onClick={onUpload}>Upload</button>
			{urls.map((url) => (
				<img
					style={{
						display:"block",
						width: "150px",
						height: "150px",
						marginTop: "20px",
						marginRight: "20px",
					}}
					src={url}
				></img>
			))}
		</div>
	);
};
