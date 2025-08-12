class Student {
    private _id: number;
    private _name: string;
    constructor(id: number, name: string){
        this._id = id;
        this._name = name;
    }
    get id(): number{
        return this._id;
    }
    get name(): string{
        return this._name;
    }
    set name(newName: string){
        this._name = newName;
    }
}

class Classroom {
    private students: Student[] = [];
    addStudent(student: Student): void{
        this.students.push(student);
    }
    showStudents(): void{
        this.students.forEach(student => {
            console.log(student.name);
        })
    }
    filterStudent(id: number): void{
        const studentFilter = this.students.filter(student => student.id === id);
        if(studentFilter.length > 0){
            console.log(studentFilter);
        }
        else{
            console.log("Không tìm thấy");
        }
    }
    removeStudent(id: number): void{
        const indexStudent = this.students.findIndex(student => student.id === id);
        if(indexStudent !== -1){
            this.students.splice(indexStudent, 1);
            allStudents.push(this.students[indexStudent]!);
        }
        else{
            console.log("Không tìm thấy");
        }
    }
    editStudent(id: number, name: string): void{
        const studentEdit = this.students.find(student => student.id === id)
        if(studentEdit){
            studentEdit.name = name;
            console.log("Chỉnh sửa thành công");
        }
        else{
            console.log("Không tìm thấy");
        }
    }
    addStudentInClass(id: number): void{
        const indexStudent = allStudents.findIndex(student => student.id === id);
        if(indexStudent !== -1){
            const student = allStudents[indexStudent]!;
            this.addStudent(student);
            allStudents.splice(indexStudent, 1);
        }
        else{
            console.log("Sinh viên không tồn tại");
        }
    }
}

const allStudents: Student[] = [];

allStudents.push(
    new Student(1, "Sơn"),
    new Student(2, "Trôn"),
    new Student(3, "Chổi"), 
    new Student(4, "Trí Công"),
    new Student(5, "Hà"),
    new Student(6, "Khánh")
);

const classCNTT2: Classroom = new Classroom();
const classCNTT1: Classroom = new Classroom();

classCNTT2.addStudentInClass(1);
classCNTT2.addStudentInClass(2);
classCNTT2.addStudentInClass(3);
classCNTT1.addStudentInClass(4);
classCNTT1.addStudentInClass(5);
classCNTT1.addStudentInClass(6);

// classCNTT2.filterStudent(1);

classCNTT2.editStudent(1, "Bùi Sơn");

classCNTT2.showStudents();
// classCNTT1.showStudents();

console.log(allStudents);
