abstract class Job {
    constructor(protected type: string){};
    abstract calculateSalary(): number;
    printType(): void{
        console.log(`Loại hình công việc: ${this.type}`);
    }
}

class partimeJob extends Job {
    workingHour: number;
    constructor(type: string, workingHour: number){
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

class fulltimeJob extends Job {
    constructor(type: string){
        super(type);
    }
    calculateSalary(): number {
        return 10000000;
    }
}

const newPartimeJob = new partimeJob("Phục vụ", 5);
const newFullTimeJob = new fulltimeJob("Dev");
console.log(newPartimeJob.calculateSalary().toLocaleString("vi-VN"));
newPartimeJob.printType();
console.log(newFullTimeJob.calculateSalary().toLocaleString("vi-VN"));
newFullTimeJob.printType();