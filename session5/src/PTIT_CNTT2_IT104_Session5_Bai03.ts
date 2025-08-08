class Employee {
    public name: string;
    protected company: string;
    private phone: string;
    constructor(name: string, company: string, phone: string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfor(){
        console.log(`Tên nhân viên: ${this.name}`);
        console.log(`Công ty: ${this.company}`);
        console.log(`Số điện thoại: ${this.phone}`);
    }
}

const employee = new Employee("Bùi Thái Sơn", "Rikkei", "0329950482");
employee.printInfor();