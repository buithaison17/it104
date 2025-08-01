class student{
    constructor(id, name, age, scores){
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
    getAverageScore(){
        const total = this.scores.reduce((a, b) => a+b, 0);
        return total / this.scores.length;
    }
}

const studentList = [
    new student("1", "Bùi Thái Sơn", 19, [10, 10, 10]),
    new student("2", "Nguyễn Dương Phương Trang", 19, [5, 5, 5]),
    new student("3", "Nguyễn Thị Phương", 19, [4, 4, 4]),
    new student("4", "Vũ Đình Kiên", 19, [6, 6, 6]),
    new student("5", "Đỗ Trí Công", 19, [5.5, 5.5, 5.5]),
];

export { studentList };