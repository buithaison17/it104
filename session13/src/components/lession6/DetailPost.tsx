import { Component } from "react";

interface Course {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface PropsType {
  courses: Course[];
}

export default class DetailPost extends Component<PropsType> {
  render() {
    const { courses } = this.props;
    return <>
        {courses.map(course => (
            <div key={course.id}>
                <p>ID: {course.id}</p>
                <p>Title: {course.title}</p>
                <p>Content: {course.content}</p>
                <p>Author: {course.author}</p>
                <hr />
            </div>
        ))}
    </>;
  }
}
