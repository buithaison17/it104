class Account {
    public accountNumber: number;
    protected balance: number;
    protected history: string [] = [];
    protected status: boolean;
    constructor(accountNumber: number, balance: number, status: boolean){
        this.accountNumber = accountNumber; 
        this.balance = balance;
        this.status = status;
    }
    deposit(money: number): void{
        if(money > 0){
            this.balance += money;
            this.history.push(`Đã nạp ${money.toLocaleString("vi-VN")} VND`);
        }
    }
    withdraw(money: number): void{
        if(this.balance < money){
            console.log("Số dư tài khoản hiện không đủ");
        }
        else if(money > 0 && money <= this.balance){
            this.balance -= money;
            this.history.push(`Đã rút ${money.toLocaleString("vi-VN")} VND`);
        }
    }
    showHistory(): void{
        this.history.forEach(deal => console.log(deal));
    }
}

class SavingAccount extends Account {
    protected interestRate: number;
    constructor(accountNumber: number, balance: number, status: boolean, interestRate: number){
        super(accountNumber, balance, status);
        this.interestRate = interestRate;
    }
    withdraw(money: number): void {
        if(money > 0){
            if(money >= this.balance){
                this.history.push(`Đã rút ${this.balance.toLocaleString("vi-VN")} VND (rút hết)`);
                this.balance = 0;
            }
            else{
                this.balance -= money;
                this.history.push(`Đã rút ${money.toLocaleString("vi-VN")} VND`);
            }
        }
    }
}

class CheckingAccount extends Account {
    private overdraftLimit: number;
    constructor(accountNumber: number, balance: number, status: boolean, overdraftLimit: number){
        super(accountNumber, balance, status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(money: number): void {
        if(money > 0){
            if(money <= this.balance + this.overdraftLimit){
                this.history.push(`Đã rút ${(this.balance + this.overdraftLimit).toLocaleString("vi-VN")} VND `)
            }
            else{
                console.log("Vượt quá hạn mực thấu chi");
                
            }
        }
    }
}

const newAccount = new CheckingAccount(398733, 0, true, 10000);
newAccount.withdraw(10000);
newAccount.showHistory();