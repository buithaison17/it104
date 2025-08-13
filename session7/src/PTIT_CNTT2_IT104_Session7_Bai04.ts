abstract class Person{
    constructor(public name: string){
        this.name = name;
    }
    displayInfo(): void{
        console.log(`Tên: ${this.name}`);
    }
}

class Student extends Person{
    constructor(private _id: number, public name: string){
        super(name);
        this._id = _id;
    }
    displayInfo(): void {
        console.log(`ID: ${this._id}`);
        super.displayInfo();
    }
}

class Teacher extends Person{
    constructor(public name: string, public subject: string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(`Môn học: ${this.subject}`);
    }
}

const newStudent: Student = new Student(1, "Sơn Bùi");
newStudent.displayInfo();

const newTeacher: Teacher = new Teacher("Sơn Bùi", "Vật lí");
newTeacher.displayInfo();