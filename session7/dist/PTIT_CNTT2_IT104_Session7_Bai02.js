"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    id;
    name;
    speed;
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    speedUp(value) {
        if (value > 0) {
            this.speed += value;
            console.log(`Đã tăng thêm ${value} km/h`);
        }
        else {
            console.log("Không thể tăng tốc");
        }
    }
    slowDown(value) {
        if (value > 0 && value <= this.speed) {
            this.speed -= value;
            console.log(`Đã giảm ${value} km/h`);
        }
        else {
            console.log("Không thể giảm tốc");
        }
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại : ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    gear;
    constructor(id, name, speed, gear) {
        super(id, name, speed);
        this.gear = gear;
    }
}
const newBicycle = new Bicycle(1, "Sơn", 10, 2);
newBicycle.showSpeed();
newBicycle.speedUp(30);
newBicycle.slowDown(10);
newBicycle.showSpeed();
