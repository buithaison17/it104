import { useEffect, useMemo, useState } from "react";
import {
	Button,
	Form,
	Image,
	Input,
	Modal,
	Pagination,
	Select,
	Table,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store/store";
import {
	addProduct,
	deleteProduct,
	editProduct,
	fetchData,
} from "../store/productsReducer";
import axios from "axios";

type ProductStatus = "active" | "inactive";

export type ProductRow = {
	id: string;
	code: string;
	name: string;
	category: string;
	price: number;
	image: string;
	status: ProductStatus;
};

export default function Products() {
	const { products } = useSelector((state: RootState) => state.productsReducer);
	const dispatch = useDispatch<AppDispatch>();
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState<ProductStatus | "">("");
	const [page, setPage] = useState(1);
	const pageSize = 5;
	const [file, setFile] = useState<File | null>(null);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const [open, setOpen] = useState(false);
	const [editing, setEditing] = useState<ProductRow | null>(null);

	const filtered = useMemo(() => {
		return products
			.filter((r) =>
				search
					? (r.name + r.code).toLowerCase().includes(search.toLowerCase())
					: true
			)
			.filter((r) => (statusFilter ? r.status === statusFilter : true));
	}, [products, search, statusFilter]);

	const paged = useMemo(() => {
		const start = (page - 1) * pageSize;
		return filtered.slice(start, start + pageSize);
	}, [filtered, page]);

	const columns: ColumnsType<ProductRow> = [
		{ title: "Mã", dataIndex: "code", key: "code", width: 120 },
		{ title: "Tên", dataIndex: "name", key: "name" },
		{ title: "Danh mục", dataIndex: "category", key: "category", width: 160 },
		{
			title: "Giá",
			dataIndex: "price",
			key: "price",
			width: 140,
			render: (v: number) => v.toLocaleString() + " đ",
		},
		{
			title: "Ảnh",
			dataIndex: "image",
			key: "image",
			width: 120,
			render: (src: string) => (src ? <Image src={src} width={56} /> : "-"),
		},
		{
			title: "Trạng thái",
			dataIndex: "status",
			key: "status",
			width: 120,
			render: (s: string) => (s === "active" ? "Hoạt động" : "Ngừng"),
		},
		{
			title: "Thao tác",
			key: "actions",
			width: 160,
			render: (_, record) => (
				<div className="flex gap-2">
					<Button size="small" type="primary" onClick={() => onEdit(record)}>
						Sửa
					</Button>
					<Button size="small" danger onClick={() => onDelete(record.id)}>
						Xóa
					</Button>
				</div>
			),
		},
	];

	function onAdd() {
		setEditing(null);
		setOpen(true);
	}

	function onEdit(row: ProductRow) {
		setEditing(row);
		setOpen(true);
	}

	function onDelete(id: string) {
		dispatch(deleteProduct(id));
	}

	interface ProductFormValues {
		code: string;
		name: string;
		category: string;
		price: number | string;
		image?: string;
		status: ProductStatus;
	}

	const handleUploadImage = async () => {
		if (!file) return;
		const formData = new FormData();
		formData.append("file", file);
		formData.append("upload_preset", "demo_upload_file");
		const response = await axios.post(
			"https://api.cloudinary.com/v1_1/db4y1dgnp/image/upload",
			formData
		);
		return response.data.secure_url as string;
	};

	async function onSubmit(values: ProductFormValues) {
		let imageUrl: string = editing?.image ?? "";
		if (file) {
			imageUrl = (await handleUploadImage()) as string;
		}

		const product: ProductRow = {
			id: editing?.id ?? uuidv4(),
			code: values.code,
			name: values.name,
			category: values.category,
			price: Number(values.price) || 0,
			image: imageUrl,
			status: values.status,
		};

		if (editing) {
			dispatch(editProduct(product));
		} else {
			dispatch(addProduct(product));
		}

		setOpen(false);
		setFile(null);
	}

	return (
		<div className="space-y-4">
			<div className="flex justify-between items-center">
				<div className="text-lg font-semibold">Quản lý sản phẩm</div>
				<Button type="primary" onClick={onAdd}>
					Thêm mới
				</Button>
			</div>

			<div className="flex justify-end gap-3">
				<Select
					placeholder="Trạng thái"
					className="min-w-40"
					allowClear
					value={statusFilter || undefined}
					onChange={(v) => setStatusFilter((v as ProductStatus) || "")}
					options={[
						{ value: "all", label: "Tất cả" },
						{ value: "active", label: "Hoạt động" },
						{ value: "inactive", label: "Ngừng hoạt động" },
					]}
				/>
				<Input
					style={{ width: "300px" }}
					placeholder="Tìm kiếm"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
			</div>

			<Table
				columns={columns}
				dataSource={paged}
				pagination={false}
				rowKey="id"
			/>

			<div className="flex justify-end">
				<Pagination
					current={page}
					pageSize={pageSize}
					total={filtered.length}
					onChange={setPage}
				/>
			</div>

			<Modal
				title={editing ? "Sửa sản phẩm" : "Thêm mới sản phẩm"}
				open={open}
				onCancel={() => setOpen(false)}
				footer={null}
				destroyOnClose
			>
				<Form
					layout="vertical"
					onFinish={onSubmit}
					initialValues={editing ?? { status: "active" }}
				>
					<Form.Item
						name="code"
						label="Mã"
						rules={[{ required: true, message: "Nhập mã" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="name"
						label="Tên"
						rules={[{ required: true, message: "Nhập tên" }]}
					>
						<Input />
					</Form.Item>
					<Form.Item
						name="category"
						label="Danh mục"
						rules={[{ required: true, message: "Chọn danh mục" }]}
					>
						<Select
							options={[
								{ value: "1", label: "Danh mục 1" },
								{ value: "2", label: "Danh mục 2" },
								{ value: "3", label: "Danh mục 3" },
							]}
							placeholder="Nhập tên danh mục"
						/>
					</Form.Item>
					<Form.Item
						name="price"
						label="Giá"
						rules={[{ required: true, message: "Nhập giá" }]}
					>
						<Input type="number" min={0} />
					</Form.Item>
					<Form.Item label="Ảnh sản phẩm">
						{editing?.image && !file && (
							<div className="mb-2">
								<Image src={editing.image} width={100} />
							</div>
						)}
						<input
							type="file"
							accept="image/*"
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
								if (e.target.files && e.target.files[0]) {
									setFile(e.target.files[0]);
								}
							}}
						/>
					</Form.Item>
					<Form.Item
						name="status"
						label="Trạng thái"
						rules={[{ required: true }]}
					>
						<Select
							options={[
								{ value: "active", label: "Hoạt động" },
								{ value: "inactive", label: "Ngừng" },
							]}
						/>
					</Form.Item>
					<Form.Item noStyle>
						<div className="flex justify-end gap-2">
							<Button onClick={() => setOpen(false)}>Hủy</Button>
							<Button type="primary" htmlType="submit">
								Lưu
							</Button>
						</div>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}
