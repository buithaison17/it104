import React, { useState } from "react";
import "../App.css";
import axios from "axios";

interface Product {
	id: string;
	name: string;
	price: number;
	description: string;
	imageUrl: string;
}

export const Exercise04 = () => {
	const [products, setProducts] = useState<Product[]>([]);
	const [stateInput, setStateInput] = useState<{
		name: string;
		price: number;
		description: string;
		image: File | null;
	}>({
		name: "",
		price: 0,
		description: "",
		image: null,
	});
	const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
		const { name, value, files } = e.target;
		if (name === "price") {
			setStateInput({ ...stateInput, price: Number(value) });
		} else if (name === "image") {
			setStateInput({ ...stateInput, image: files ? files[0] : null });
		} else {
			setStateInput({ ...stateInput, [name]: value });
		}
	};
	const handleUpload = async (file: File) => {
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "demo_upload_file");
		const response = await axios.post(
			"https://api.cloudinary.com/v1_1/db4y1dgnp/image/upload",
			formData
		);
		return response.data.secure_url as string;
	};
	const onAdd = async () => {
		if (!stateInput.image) return;
		if (!stateInput.name.trim()) return;
		if (!stateInput.description.trim()) return;
		if (!stateInput.price) return;
		const imageUrl = await handleUpload(stateInput.image);
		console.log("add");

		const product: Product = {
			id: String(products.length + 1),
			name: stateInput.name.trim(),
			price: Number(stateInput.price),
			description: stateInput.description.trim(),
			imageUrl: imageUrl,
		};
		setProducts([...products, product]);
		setStateInput({
			...stateInput,
			name: "",
			price: 0,
			description: "",
			image: null,
		});
	};
	return (
		<div className="container p-4">
			<div className="shadow p-3">
				<h1 className="text-xl font-medium">Quản lý sản phẩm</h1>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="name-product">Tên sản phẩm</label>
					<input
						name="name"
						onChange={handleInput}
						value={stateInput.name}
						id="name-product"
						className="w-[300px] border p-1 px-4 rounded-md hover:border-blue-500"
						type="text"
						placeholder="Nhập tên sản phẩm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="price-product">Giá</label>
					<input
						name="price"
						onChange={handleInput}
						value={stateInput.price}
						id="price-product"
						className="w-[300px] border p-1 px-4 rounded-md hover:border-blue-500"
						type="number"
						placeholder="Nhập giá sản phẩm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="description-product">Mô tả</label>
					<input
						name="description"
						onChange={handleInput}
						value={stateInput.description}
						id="description-product"
						className="w-[300px] border p-1 px-4 rounded-md hover:border-blue-500"
						type="text"
						placeholder="Nhập tên sản phẩm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="image-product">Ảnh sản phẩm</label>
					<input
						name="image"
						onChange={handleInput}
						id="image-product"
						type="file"
					/>
				</div>
				<button
					onClick={onAdd}
					className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md"
				>
					Thêm sản phẩm
				</button>
			</div>
			<div className="mt-5 grid grid-cols-3 gap-3">
				{products.map((product) => (
					<div key={product.id} className="w-fit p-3 shadow-md">
						<img
							className="w-[200px] h-[200px] object-center object-cover"
							src="https://phenika-storage.s3.ap-southeast-2.amazonaws.com/uploads/d0b74566-b1ee-42b6-bf34-0b37b11a489c.png"
							alt=""
						/>
						<div>
							{product.name} - {`${product.price.toLocaleString("vi-VN")}VND`}
						</div>
						<div className="w-[100%] break-normal">{product.description}</div>
						<div className="flex justify-center">
							<button>Xóa</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
