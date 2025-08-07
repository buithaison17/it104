interface Student {
    name: string;
    age: number;
    email: string;
};

let student: Student = {
    name: "Sơn Bùi",
    age: 12,
    email: "sonbui@gmail.com",
};

const logStudent = (student: Student): void => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}`);
}

logStudent(student);