"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicale {
    id;
    name;
    year;
    company;
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfor() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}
const car = new Vehicale(1, "Civic", 2025, "Honda");
car.getInfor();
