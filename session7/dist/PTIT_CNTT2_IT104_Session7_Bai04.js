"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    displayInfo() {
        console.log(`Tên: ${this.name}`);
    }
}
class Student extends Person {
    _id;
    name;
    constructor(_id, name) {
        super(name);
        this._id = _id;
        this.name = name;
        this._id = _id;
    }
    displayInfo() {
        console.log(`ID: ${this._id}`);
        super.displayInfo();
    }
}
class Teacher extends Person {
    name;
    subject;
    constructor(name, subject) {
        super(name);
        this.name = name;
        this.subject = subject;
        this.subject = subject;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Môn học: ${this.subject}`);
    }
}
const newStudent = new Student(1, "Sơn Bùi");
newStudent.displayInfo();
const newTeacher = new Teacher("Sơn Bùi", "Vật lí");
newTeacher.displayInfo();
