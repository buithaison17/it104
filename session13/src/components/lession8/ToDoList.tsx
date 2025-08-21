import { Component } from "react";
import "../../styles/lession8/style.css";

interface Task {
  id: number;
  name: string;
  assign: string;
  status: boolean;
  createAt: Date;
}

interface StateType {
  tasks: Task[];
}

export default class ToDoList extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      tasks: [
        {
          id: 1,
          name: "Học React",
          assign: "Nguyễn Văn A",
          status: true,
          createAt: new Date(2024, 0, 10, 9, 0, 0),
        },
        {
          id: 2,
          name: "Lập kế hoạch dự án",
          assign: "Trần Thị B",
          status: false,
          createAt: new Date(2023, 4, 5, 14, 15, 30),
        },
				{
          id: 3,
          name: "Lập kế hoạch dự án 1",
          assign: "Trần Thị C",
          status: true,
          createAt: new Date(2023, 4, 5, 14, 15, 30),
        },
      ],
    };
  }
  render() {
    const { tasks } = this.state;
    const formatDate = (date: Date): string => {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };
    return (
      <>
        <table>
          <thead>
            <tr className="line">
              <td className="pb-1 pright-1">STT</td>
              <td className="pb-1 pright-3">Tên công việc</td>
              <td className="pb-1 pright-2">Người thức hiện</td>
              <td className="pb-1 pright-2">Trạng thái</td>
              <td className="pb-1 pright-2">Thời gian tạo</td>
              <td className="pb-1 pright-1 plr-1" colSpan={2}>
                Chức năng
              </td>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <td className="pt-1">{index + 1}</td>
                <td className="pt-1">{task.name}</td>
                <td className="pt-1">{task.assign}</td>
                <td className="pt-1">
                  <div
                    className={task.status ? "status-success" : "status-fail"}
                  >
                    {task.status ? "Hoàn thành" : "Chưa hoàn thành"}
                  </div>
                </td>
                <td className="pt-1">{formatDate(task.createAt)}</td>
                <td className="pt-1">
                  <button className="btn-edit">Sửa</button>
                </td>
                <td className="pt-1">
                  <button className="btn-remove">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}
