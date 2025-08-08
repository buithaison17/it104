class Vehicale {
    name: string;
    year: number;
    company: string;
    constructor(name: string, year: number, company: string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfor(){
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}

const car = new Vehicale ("Civic", 2025, "Honda");
car.getInfor();