import "../App.css";

export const Exercise03 = () => {
	return (
		<div className="container p-4">
			<div className="shadow p-3">
				<h1 className="text-xl font-medium">Quản lý sản phẩm</h1>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="name-product">Tên sản phẩm</label>
					<input
						id="name-product"
						className="w-[300px] border p-1 px-4 rounded-md hover:border-blue-500"
						type="text"
						placeholder="Nhập tên sản phẩm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="price-product">Giá</label>
					<input
						id="price-product"
						className="w-[300px] border p-1 px-4 rounded-md hover:border-blue-500"
						type="number"
						placeholder="Nhập giá sản phẩm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="description-product">Mô tả</label>
					<input
						id="description-product"
						className="w-[300px] border p-1 px-4 rounded-md hover:border-blue-500"
						type="text"
						placeholder="Nhập tên sản phẩm"
					/>
				</div>
				<div className="flex flex-col gap-2 mt-4">
					<label htmlFor="image-product">Ảnh sản phẩm</label>
					<input id="image-product" type="file" />
				</div>
				<button className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-md">
					Thêm sản phẩm
				</button>
			</div>
			<div className="mt-5 grid grid-cols-3 gap-3">
				<div className="w-fit p-3 shadow-md">
					<img
						className="w-[200px] h-[200px] object-center object-cover"
						src="https://phenika-storage.s3.ap-southeast-2.amazonaws.com/uploads/d0b74566-b1ee-42b6-bf34-0b37b11a489c.png"
						alt=""
					/>
					<div>Quần đùi - 5000đ</div>
					<div className="w-[100%] break-normal">Mô tả</div>
					<div className="flex justify-center">
						<button>Xóa</button>
					</div>
				</div>
			</div>
		</div>
	);
};
