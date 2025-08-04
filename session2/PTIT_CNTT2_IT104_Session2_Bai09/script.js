const student = {
    name: "Dev",
    age: 20,
    listMonhoc: [
        {subject: "Math", score: 9},
        {subject: "English", score: 7.5},
        {subject: "Physis", score: 6},
        {subject: "Literature", score: 8.5},
    ]
}

const getStudentSummary = (student) => {
    const {name, age, listMonhoc = []} = student;
    const average = listMonhoc.reduce((total, subject) => total + subject.score, 0) / student.listMonhoc.length;
    const bestSubject = listMonhoc.reduce((max, subject) => subject.score > max.score ? subject : max);
    const weakestSubject = listMonhoc.reduce((min, subject) => subject.score < min.score ? subject : min);
    console.log(`${name} is ${age} years old.`);
    console.log(`Average score: ${average} -> ${average < 5 ? "Học sinh yếu" : average < 7 ? "Học sinh trung bình" :average < 8 ? "Học sinh khá" : "Học sinh giỏi"}`);
    console.log(`Best subject: ${bestSubject.subject} (${bestSubject.score})`);
    console.log(`Weakest subject: ${weakestSubject.subject} (${weakestSubject.score})`);
}

getStudentSummary(student);