class menuItem {
    id: number;
    name: string;
    price: number;
    constructor(id: number, name: string, price: number){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class Table {
    id: number;
    capacity: number;
    available: boolean = true;
    constructor(id: number, capacity: number){
        this.capacity = capacity;
        this.id = id;
    }
}

class Reservation {
    id: number;
    customerName: string;
    tableId: number;
    constructor(id: number, customerName: string, tableId: number){
        this.customerName = customerName;
        this.id = id;
        this.tableId = tableId;
    }
}

class Order {
    id: number;
    tableId: number;
    items: menuItem[];
    constructor(id: number, tableId: number, items: menuItem[]){
        this.id = id;
        this.tableId = tableId;
        this.items = items;
    }
    getTotal(): number{
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

class Restaurent {
    menu: menuItem[] = [];
    tables: Table[] = [];
    reservations: Reservation[] = [];
    orders: Order[] = [];
    addMenuItem(item: menuItem): void{
        this.menu.push(item);
        console.log(`Thêm thành công ${item.name} vào Menu`);
    }
    addTable(table: Table): void{
        this.tables.push(table);
        console.log(`Thêm thành công bàn ${table.id} vào nhà hàng`);
    }
    makeReservation(customerName: string, tableId: number): void{
        const table = this.tables.find(table => table.id === tableId);
        if(table){
            if(table.available){
                table.available = false;
                const idRandom: number = Number((Math.random()*10000).toFixed(0));
                const newReservation = new Reservation(idRandom, customerName, tableId);
                this.reservations.push(newReservation);
                console.log(`Khách hàng ${customerName} đặt thành công bàn ${table.id}`);
            }
            else{
                console.log(`Bàn hiện tại đã được đặt`);
            }
        }
        else{
            console.log(`Bàn không tồn tại`);
        }
    }
    placeOrde(tableId: number, items: menuItem[]): void{
        const table = this.tables.find(table => table.id === tableId);
        if(!table || table.available){
            console.log("Không thể gọi món");
            return;
        }
        const orderId = Number((Math.random()*10000).toFixed(0));
        const newOrder = new Order(orderId, tableId, items);
        this.orders.push(newOrder);
        console.log("Gọi món thành công");
    }
    generateBill(tableId: number): void{
        const orderOfTable = this.orders.filter(order => order.tableId === tableId);
        if(orderOfTable){
            if(orderOfTable.length === 0){
                console.log("Không thể thanh toán");
                return;
            }
            const total = orderOfTable.reduce((sum, order) => sum + order.getTotal(), 0);
            console.log(`Tổng tiền thanh toán của bàn ${tableId} là: ${total.toLocaleString("vi-VN")} VND`);
            this.orders =  this.orders.filter(order => order.tableId !== tableId);
            this.reservations = this.reservations.filter(r => r.tableId !== tableId);
            const table = this.tables.find(t => t.id === tableId);
            if(table) table.available = true;
        }
    }
}

const restaurant = new Restaurent();

const pho = new menuItem(1, "Phở Bò", 50000);
const banhMi = new menuItem(2, "Bánh Mì", 20000);
const caPhe = new menuItem(3, "Cà Phê Sữa", 25000);

restaurant.addMenuItem(pho);
restaurant.addMenuItem(banhMi);
restaurant.addMenuItem(caPhe);

const table1 = new Table(1, 4);
const table2 = new Table(2, 2);

restaurant.addTable(table1);
restaurant.addTable(table2);

restaurant.makeReservation("Nguyễn Văn A", 1);
restaurant.makeReservation("Trần Thị B", 1);

restaurant.placeOrde(1, [pho, caPhe]);
restaurant.placeOrde(2, [banhMi]);

restaurant.generateBill(1);
restaurant.generateBill(2);
