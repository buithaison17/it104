class Employee{
    public name: string;
    protected company: string;
    private _phone: string;
    constructor(name: string, company: string, phone: string){
        this._phone = phone;
        this.company = company;
        this.name = name;
    }
    printInfor(): void{
        console.log(`Nhân viên: ${this.name}`);
        console.log(`- Công ty: ${this.company}`);
        console.log(`- Số điện thoại: ${this._phone}`);
    }
}

class Manager extends Employee{
    public teamSize: number;
    constructor(name: string, company: string, phone: string, teamSize: number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfor(): void {
        super.printInfor();
        console.log(`- Quy mô nhóm: ${this.teamSize}`);
    }
}

const newManager = new Manager("Sơn Bùi", "Rikkei", "0329950482", 10);
newManager.printInfor();