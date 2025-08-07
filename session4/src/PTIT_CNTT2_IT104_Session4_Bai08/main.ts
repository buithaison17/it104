interface Product {
    readonly id: string;
    name: string;
    price: number;
};

interface OrderItem {
    product: Product;
    quantity: number;
};

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string;
};

// Danh sách sản phẩm mẫu
const product1: Product = {
    id: "p001",
    name: "Áo sơ mi",
    price: 500000,
};

const product2: Product = {
    id: "p002",
    name: "Quần tây",
    price: 400000,
};

// Tạo đơn hàng mới
const newOrder: Order = {
    orderId: "#ORD0001",
    customerName: "Nguyễn Văn A",
    items: [
        {
            product: product1,
            quantity: 2,
        },
        {
            product: product2,
            quantity: 1,
        }
    ],
    note: "Giao hàng sau 18h",
};

const calculateOrderTotal = (order: Order): number => {
    let total: number = 0;
    for(const item of order.items){
        total += item.product.price * item.quantity;
    }
    return total;
}

const printOrder = (order: Order): void => {
    console.log(`Đơn hàng: ${order.orderId}`);
    console.log(`Khách hàng: ${order.customerName}`);
    console.log(`Sản phẩm:`);
    for(const item of order.items){
        console.log(`- ${item.product.name} x ${item.quantity} -> ${item.product.price * item.quantity} VND`);
    }
    const total = calculateOrderTotal(order);
    console.log(`Tổng cộng: ${total} VND`);
    console.log(`Ghi chú: ${order.note}`);
}

printOrder(newOrder);