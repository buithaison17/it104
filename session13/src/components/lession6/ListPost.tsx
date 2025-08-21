import { Component } from "react";
import DetailPost from "./DetailPost";

interface Course {
  id: number;
  title: string;
  content: string;
  author: string;
}

export default class ListPost extends Component {
  render() {
    const courses: Course[] = [
      {
        id: 1,
        title: "Tại sao học ReactJs",
        content: "Học để đi làm",
        author: "David",
      },
      {
        id: 2,
        title: "Props trong ReactJs",
        content: "Props giúp truyền dữ liệu từ cha xuống con",
        author: "Linda",
      },
      {
        id:3,
        title: "State trong ReactJs",
        content: "State giúp lưu trạng thái dữ liệu bên trong một Component",
        author: "David"
    }
    ];
    return <>
        <DetailPost courses = {courses}></DetailPost>
    </>;
  }
}
