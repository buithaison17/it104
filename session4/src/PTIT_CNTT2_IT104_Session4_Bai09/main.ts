interface Product {
    readonly id: string;
    name: string;
    price: number;
};

interface OrderItem {
    product: Product;
    quantity: number;
    note?: string;
};

interface Order {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    deliveryAddress: string;
    isPaid: boolean;
};

interface Invoice {
    invoiced: string;
    orders: Order[];
    createAt: Date;
};

// Khởi tạo sản phẩm
const product1: Product = {
    id: "p001",
    name: "Áo sơ mi",
    price: 500000,
}

const product2: Product = {
    id: "p002",
    name: "Quần jean",
    price: 400000,
}

const product3: Product = {
    id: "p003",
    name: "Váy hoa",
    price: 700000,
}

// Tạo đơn hàng
const order1: Order = {
    orderId: "#ORD001",
    customerName: "Nguyễn Văn A",
    items: [
        {product: product1, quantity: 2},
        {product: product2, quantity: 1},
    ],
    deliveryAddress: "Thái Bình",
    isPaid: true,
}

const order2: Order = {
    orderId: "#ORD002",
    customerName: "Trần Thị B",
    items: [
        {product: product3, quantity: 1, note: "Size M"},
    ],
    deliveryAddress: "Hưng Yên",
    isPaid: false,
}

// Tạo hóa đơn
const newInvoice: Invoice = {
    invoiced: "#INV001",
    orders: [order1, order2],
    createAt: new Date("2024-05-14"),
}

const calculateInvoiceTotal = (invoice: Invoice): number => {
    return invoice.orders.reduce((invoiceTotal, order) => {
        return invoiceTotal + order.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }, 0);
}

const getUnpaidOrders = (invoice: Invoice): Order[] => {
    return invoice.orders.filter(order => !order.isPaid);
};

const printInvoice = (invoice: Invoice): void => {
    console.log(`Hóa đơn: ${invoice.invoiced} - Ngày tạo: ${invoice.createAt.toLocaleDateString("vi-VN")}`);
    console.log('---------------');
    for(const order of invoice.orders){
        console.log(`Đơn hàng: ${order.orderId} - ${order.customerName}`);
        let total: number = 0;
        for(const item of order.items){
            console.log(`- ${item.product.name} x ${item.quantity} -> ${(item.quantity * item.product.price).toLocaleString("vi-VN")} VND`);
            total += item.quantity * item.product.price;
        }
        console.log(`Tổng đơn: ${total.toLocaleString("vi-VN")}`);
        console.log(` Trạng thái: ${order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}`);
    }
    const total: number = calculateInvoiceTotal(invoice);
    console.log(`Tổng cộng hóa đơn: ${total.toLocaleString("vi-VN")} VND`);
}

printInvoice(newInvoice);