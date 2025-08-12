"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    ;
    printType() {
        console.log(`Loại hình công việc: ${this.type}`);
    }
}
class partimeJob extends Job {
    workingHour;
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class fulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const newPartimeJob = new partimeJob("Phục vụ", 5);
const newFullTimeJob = new fulltimeJob("Dev");
console.log(newPartimeJob.calculateSalary().toLocaleString("vi-VN"));
newPartimeJob.printType();
console.log(newFullTimeJob.calculateSalary().toLocaleString("vi-VN"));
newFullTimeJob.printType();
