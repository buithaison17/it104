interface Product {
    id: string;
    name: string,
    price: number,
    category: {
        id: string,
        name: string,
    };
    discount?: number;
};

const products: Product[] = [
  {
    id: "p001",
    name: "iPhone 15 Pro",
    price: 15000000,
    category: {
      id: "c01",
      name: "Điện thoại",
    },
    discount: 0.1,
  },
  {
    id: "p002",
    name: "MacBook Air M2",
    price: 20000000,
    category: {
      id: "c02",
      name: "Laptop",
    },
  },
  {
    id: "p003",
    name: "Tai nghe Sony WH-1000XM5",
    price: 150000000,
    category: {
      id: "c03",
      name: "Phụ kiện",
    },
    discount: 0.05,
  },
];

const getFinalPrice = (product: Product): number => {
    if(product.discount) return product.price * (1 - product.discount);
    return product.price;
}


const printProductInfo = (products: Product[]): void => {
    for (const product of products) {
        const priceAfterDiscount = getFinalPrice(product).toFixed(2);
        console.log(`Tên: ${product.name}`);
        console.log(`Giá gốc: ${product.price} VND`);
        console.log(`Giá sau giảm: ${priceAfterDiscount} VND`);
        console.log(`Danh mục: ${product.category.name}`);
        console.log('----------');
        
    }
}

printProductInfo(products);