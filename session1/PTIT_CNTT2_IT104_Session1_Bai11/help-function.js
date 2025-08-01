export const getStudentById = (studentList, id) => {
    return studentList.find(student => student.id === id) || "Không tìm thấy sinh viên";
};

export const getTopStudents = (studentList) => {
    const max = Math.max(...studentList.map(student => student.getAverageScore()));
    return studentList.filter(student => student.getAverageScore() === max);
};

export const getClassAverage = (studentList) => {
    const total  = studentList.recude((sum, student) => sum + student.getAverageScore(), 0);
    return total / studentList.length;
};

export const getStudentsByScoreRange = (studentList, min, max) => {
    return studentList.filter(student => {
        const avg = student.getAverageScore();
        return avg >= min && avg <= max;
    });
};

export const sortStudentsByName = (studentList) => {
    return [...studentList].sort((a, b) => a.name.localeCompare(b.name));
}