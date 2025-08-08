class Vehicale {
    readonly id: number;
    name: string;
    year: number;
    company: string;
    constructor(id: number ,name: string, year: number, company: string){
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfor(){
        console.log(`ID: ${this.id}`);
        console.log(`Tên xe: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng xe: ${this.company}`);
    }
}

const car = new Vehicale (1, "Civic", 2025, "Honda");
car.getInfor();