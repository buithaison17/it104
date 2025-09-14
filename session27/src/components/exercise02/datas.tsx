interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
}

export const products: Product[] = [
	{
		id: 1,
		name: "Laptop Dell XPS 13",
		price: 32000000,
		description: "Laptop mỏng nhẹ, màn hình 13 inch, CPU Intel Core i7.",
	},
	{
		id: 2,
		name: "iPhone 15 Pro",
		price: 28000000,
		description: "Điện thoại thông minh với chip A17 Bionic, camera 48MP.",
	},
	{
		id: 3,
		name: "Tai nghe Sony WH-1000XM5",
		price: 9000000,
		description: "Tai nghe chống ồn chủ động, âm thanh chất lượng cao.",
	},
	{
		id: 4,
		name: "Chuột Logitech MX Master 3S",
		price: 2500000,
		description: "Chuột không dây cao cấp, pin sạc nhanh, hỗ trợ đa thiết bị.",
	},
	{
		id: 5,
		name: "Màn hình LG UltraGear 27 inch",
		price: 7500000,
		description: "Màn hình gaming 2K, 165Hz, tấm nền IPS.",
	},
];
