class Account {
    id: number;
    userName: string;
    private password: string;
    isLogin: boolean = false;
    role: string;
    constructor(id: number, userName: string, password: string, role: string){
        this.id = id;
        this.password = password;
        this.role = role;
        this.userName = userName;
    }
    login(userName: string, password: string){
        if(userName === this.userName && password === this.password){
            this.isLogin = true;
            console.log(`${this.userName} đăng nhập thành công`);
        }
        else{
            console.log("Tài khoản hoặc mật khẩu không chính xác");
        }
    }
    logout(): void{
        if(this.isLogin){
            this.isLogin = false;
            console.log(`${this.userName} đăng xuất thành công`);
        }
        else{
            console.log("Bạn chưa đăng nhập");
        }
    }
}

class userAcc extends Account {
    status: "active" | "banned" = "active";
    constructor(id: number, userName: string, password: string){
        super(id, userName, password, "User");
    }
    login(userName: string, password: string): void {
        if(this.status === "banned"){
            console.log(`Tài khoản ${this.userName} đã bị khóa`);
            return;
        }
        super.login(userName, password);
    }
}

class adminAcc extends Account {
    constructor(id: number, userName: string, password: string){
        super(id, userName, password, "Admin");
    }
    banUser(user: userAcc): void{
        user.status = "banned";
        console.log(`Khóa thành công tài khoản ${user.userName}`);
    }
}

const user1 = new userAcc(1, "sonbui", "123456");
user1.login("sonbui", "123456");
user1.logout();
const admin = new adminAcc(2, "sonbuidz", "12345");
admin.banUser(user1);