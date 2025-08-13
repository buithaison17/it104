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

const newAccount = new SavingAccount(329950823, 10000, true, 0.2);

newAccount.deposit(10000);
newAccount.withdraw(30000);
newAccount.showHistory();
