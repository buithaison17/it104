"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
;
const students = [];
const subject1 = {
    subjectName: "Lập trình C",
    score: 10,
};
const subject2 = {
    subjectName: "Lập trình hướng đối tượng",
    score: "B",
};
const subject3 = {
    subjectName: "HTML, CSS & JS",
    score: "C",
};
const student1 = {
    name: "Bùi Thái Sơn",
    age: 20,
    subjects: [subject1, subject2],
};
const student2 = {
    name: "Chổi",
    age: 18,
    subjects: [subject3],
};
const addStudent = (student) => {
    students.push(student);
};
const converScore = (score) => {
    if (typeof score === "number")
        return score;
    switch (score) {
        case 'A':
            return 10;
        case 'B':
            return 8;
        case 'C':
            return 6;
        case 'D':
            return 4;
        case 'E':
            return 2;
        case 'F':
            return 0;
    }
    return 0;
};
const updateStudent = (nameStudent) => {
    const findStudent = students.find(student => student.name.toLowerCase() === nameStudent.toLowerCase());
    if (findStudent) {
        findStudent.name = "Sơn Bùi";
        findStudent.age = 19;
    }
};
const calculateAverage = (student) => {
    return student.subjects.reduce((total, subject) => {
        return total + converScore(subject.score);
    }, 0) / student.subjects.length;
};
const rankingStudent = (student) => {
    const average = calculateAverage(student);
    if (average < 5)
        return "Yếu";
    else if (average < 6.5)
        return "Trung bình";
    else if (average < 8.5)
        return "Khá";
    else
        return "Giỏi";
};
addStudent(student1);
addStudent(student2);
updateStudent("Bùi Thái Sơn");
console.log(calculateAverage(student2));
console.log(rankingStudent(student2));
//# sourceMappingURL=main.js.map