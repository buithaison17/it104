"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    _phone;
    constructor(name, company, phone) {
        this._phone = phone;
        this.company = company;
        this.name = name;
    }
    printInfor() {
        console.log(`Nhân viên: ${this.name}`);
        console.log(`- Công ty: ${this.company}`);
        console.log(`- Số điện thoại: ${this._phone}`);
    }
}
class Manager extends Employee {
    teamSize;
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfor() {
        super.printInfor();
        console.log(`- Quy mô nhóm: ${this.teamSize}`);
    }
}
const newManager = new Manager("Sơn Bùi", "Rikkei", "0329950482", 10);
newManager.printInfor();
