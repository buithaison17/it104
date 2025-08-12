"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    _id;
    _name;
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
}
class Classroom {
    students = [];
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        this.students.forEach(student => {
            console.log(student.name);
        });
    }
    filterStudent(id) {
        const studentFilter = this.students.filter(student => student.id === id);
        if (studentFilter.length > 0) {
            console.log(studentFilter);
        }
        else {
            console.log("Không tìm thấy");
        }
    }
    addStudentInClass(id) {
        const indexStudent = allStudents.findIndex(student => student.id === id);
        if (indexStudent !== -1) {
            const student = allStudents[indexStudent];
            this.addStudent(student);
            allStudents.splice(indexStudent, 1);
        }
        else {
            console.log("Sinh viên không tồn tại");
        }
    }
}
const allStudents = [];
allStudents.push(new Student(1, "Sơn"), new Student(2, "Trôn"), new Student(3, "Chổi"), new Student(4, "Trí Công"), new Student(5, "Hà"), new Student(6, "Khánh"));
const classCNTT2 = new Classroom();
const classCNTT1 = new Classroom();
classCNTT2.addStudentInClass(1);
classCNTT2.addStudentInClass(2);
classCNTT2.addStudentInClass(3);
classCNTT1.addStudentInClass(4);
classCNTT1.addStudentInClass(5);
classCNTT1.addStudentInClass(6);
classCNTT2.filterStudent(1);
classCNTT2.showStudents();
classCNTT1.showStudents();
console.log(allStudents);
