class Vehicle{
    protected id: number;
    protected name: string;
    protected speed: number;
    constructor(id: number, name: string, speed: number){
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    speedUp(value: number): void{
        if(value > 0){
            this.speed += value;
            console.log(`Đã tăng thêm ${value} km/h`);
        }
        else{
            console.log("Không thể tăng tốc");
        }
    }
    slowDown(value: number): void{
        if(value > 0 && value <= this.speed){
            this.speed -= value;
            console.log(`Đã giảm ${value} km/h`);
        }
        else{
            console.log("Không thể giảm tốc");
        }
    }
    showSpeed(): void{
        console.log(`Tốc độ hiện tại : ${this.speed} km/h`);
    }
}

class Bicycle extends Vehicle{
    private gear: number;
    constructor(id: number, name: string, speed: number, gear: number){
        super(id, name, speed);
        this.gear = gear;
    }
}

const newBicycle: Bicycle = new Bicycle(1, "Sơn", 10, 2);
newBicycle.showSpeed();
newBicycle.speedUp(30);
newBicycle.slowDown(10);
newBicycle.showSpeed();