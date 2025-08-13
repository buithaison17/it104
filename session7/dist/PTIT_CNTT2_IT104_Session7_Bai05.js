"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    id;
    userName;
    password;
    isLogin = false;
    role;
    constructor(id, userName, password, role) {
        this.id = id;
        this.password = password;
        this.role = role;
        this.userName = userName;
    }
    login(userName, password) {
        if (userName === this.userName && password === this.password) {
            this.isLogin = true;
            console.log(`${this.userName} đăng nhập thành công`);
        }
        else {
            console.log("Tài khoản hoặc mật khẩu không chính xác");
        }
    }
    logout() {
        if (this.isLogin) {
            this.isLogin = false;
            console.log(`${this.userName} đăng xuất thành công`);
        }
        else {
            console.log("Bạn chưa đăng nhập");
        }
    }
}
class userAcc extends Account {
    status = "active";
    constructor(id, userName, password) {
        super(id, userName, password, "User");
    }
    login(userName, password) {
        if (this.status === "banned") {
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
            return;
        }
        super.login(userName, password);
    }
}
const user1 = new userAcc(1, "sonbui", "123456");
user1.login("sonbui", "123456");
user1.logout();
