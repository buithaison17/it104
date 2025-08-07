interface Student {
    readonly studentId: string;
    name: string;
    email: string;
    hasCompleted: boolean;
    finalScore?: number;
};

interface Course {
    courseId: string;
    title: string;
    instructor: string;
    students: Student[];
    isActive: boolean;
};

interface CourseManager {
    schoolName: string;
    year: number;
    course: Course[];
};

// Tạo học sinh
const student1: Student = {
    studentId: "s001",
    name: "Bùi Thái Sơn",
    email: "sonbui@gmail.com",
    hasCompleted: true,
    finalScore: 10,
};

const student2: Student = {
    studentId: "s002",
    name: "Chổi",
    email: "choi@gmail.com",
    hasCompleted: false,
};

const student3: Student = {
    studentId: "s003",
    name: "Phôn",
    email: "phon@gmail.com",
    hasCompleted: false,
};

const student4: Student = {
    studentId: "s004",
    name: "Trôn",
    email: "tron@gmail.com",
    hasCompleted: false,
};

// Tạo khóa học
const course1: Course = {
    courseId: "c001",
    title: "TypeScript Cơ Bản",
    instructor: "Nguyễn Văn A",
    students: [student1, student2],
    isActive: true,
};

const course2: Course = {
    courseId: "c002",
    title: "HTML & CSS",
    instructor: "Trần Thị B",
    students: [student3, student4],
    isActive: false,
};

// Tạo manager
const manager: CourseManager = {
    schoolName: "PTIT",
    year: 2025,
    course: [course1, course2],
};

const getCompletedStudents = (course: Course): Student[] => {
    return course.students.filter(student => student.hasCompleted);
};

const calculateAverageScore = (course: Course): number | null => {
    if(course.students.every(student => !student.finalScore)) return null;
    let total: number = 0
    for(const student of course.students){
        if(student.finalScore){
            total += student.finalScore;
        }
    }
    return total / course.students.length;
};

const printCourseReport = (manager: CourseManager): void => {
    const courses: Course[] = manager.course;
    courses.map((course, index) => {
        console.log(`${index + 1}. Khóa: ${course.title} (GV :${course.instructor})`);
        console.log(`- Tổng số học viên: ${course.students.length}`);
        console.log(`- Hoàn thành: ${getCompletedStudents(course).length} học viên`);
        console.log(`- Điểm trung bình: ${calculateAverageScore(course) === null ? "N/A" : calculateAverageScore(course)}`);
        console.log(`- Trạng thái: ${course.isActive ? "Đang mở" : "Đã đóng"}`);
    })
};

printCourseReport(manager);