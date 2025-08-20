import '../../index.css'

export default function ListCourses() {
    const courses: string[] = ["HTML", "CSS", "JavaScript", "ReactJS"];
  return (
    <>
        <ul>
            {courses.map((course, index) => <li style={{textAlign: "left"}} key={index}>{course}</li>)}
        </ul>
    </>
  )
}
