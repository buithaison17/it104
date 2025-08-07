interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: string;
    department: string;
}

type staffMember = Person & Employee;

const staff: staffMember = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán",
}

const printStaffInfo = (staff: staffMember): void => {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng ${staff.department}`);
}

printStaffInfo(staff);