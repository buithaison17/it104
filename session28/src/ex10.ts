type Action = "ADD" | "DELETE";
const tasks: string[] = [];

const print = (task: string, action: Action): void => {
	switch (action) {
		case "ADD": {
			console.log(`Thêm thành công công việc ${task}`);
			break;
		}
		case "DELETE": {
			console.log(`Xóa thành công công việc ${task}`);
			break;
		}
	}
};

const addTask = (task: string, callback: Function): void => {
	tasks.push(task);
	callback(task, "ADD");
};

const deleteTask = (task: string, callback: Function): void => {
	const taskIndex = tasks.findIndex((t) => t === task);
	if (taskIndex == -1) {
		console.log("Công việc không tồn tại");
		return;
	}
	tasks.splice(taskIndex, 1);
	callback(task, "DELETE");
};

addTask("Rửa bát", print);
deleteTask("Rửa bát", print);
