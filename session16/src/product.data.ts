export interface Product {
	id: number;
	name: string;
	img: string;
	price: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Điện thoại Samsung Galaxy S25",
    img: "https://cdn.tgdd.vn/Products/Images/42/333359/samsung-galaxy-s25-plus-blue-thumbai-600x600.jpg",
    price: 20000000,
  },
  {
    id: 2,
    name: "Điện thoại iPhone 15 Pro",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_aZeS0dvvulSDyVW-FlKqtvIkJdEyCUHJAw&s",
    price: 30000000,
  },
  {
    id: 3,
    name: "Laptop MacBook Air M2",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0TvqJIaFIRCIP-fa0zFDXyXq29iJtQ27r8w&s",
    price: 35000000,
  },
  {
    id: 4,
    name: "Tai nghe Sony WH-1000XM5",
		img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzN6YPrrJ0JdxqfRZYSji9PW5XG7keWvx1Q&s",
    price: 8000000,
  },
  {
    id: 5,
    name: "Smartwatch Apple Watch Series 9",
		img: "https://product.hstatic.net/200000850199/product/3_cae3c290c1304ada9b5dbb1c72748027_4a963c3f875a44c9b0aa57d35edf4c86.jpg",
		price: 12000000,
  },
  {
    id: 6,
    name: "Máy ảnh Canon EOS R6",
		img: "https://cdn.vjshop.vn/may-anh/mirrorless/canon/canon-eos-r6-mark-ii/canon-eos-r6-mark-ii.jpg",
    price: 45000000,
  },
];
