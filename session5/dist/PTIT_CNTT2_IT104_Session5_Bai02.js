"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    id;
    age;
    email;
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    getInfor() {
        console.log(`ID: ${this.id} - ${this.email} - ${this.age}`);
    }
}
const students = [];
const student1 = new Student(1, 19, "123@gmail.com");
const student2 = new Student(2, 29, "1234@gmail.com");
students.push(student1);
students.push(student2);
console.log(students);
