import {studentList} from './students.js';
import {
    getClassAverage,
    getStudentById,
    getStudentsByScoreRange,
    getTopStudents,
} from './help-function.js';

console.log(getTopStudents(studentList));