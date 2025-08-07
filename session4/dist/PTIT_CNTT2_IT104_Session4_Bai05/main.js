"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staff = {
    name: "Nguyễn Văn A",
    age: 28,
    employeeId: "EMP001",
    department: "Kế toán",
};
const printStaffInfo = (staff) => {
    console.log(`Nhân viên: ${staff.name} (${staff.age} tuổi), Mã nhân viên: ${staff.employeeId} - Phòng ${staff.department}`);
};
printStaffInfo(staff);
//# sourceMappingURL=main.js.map