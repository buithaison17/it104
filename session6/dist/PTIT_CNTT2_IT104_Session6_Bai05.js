"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor() {
        this.speed = 0;
    }
    speedUp(value) {
        if (value > 0)
            this.speed += value;
    }
    slowDown(value) {
        if (value <= this.speed && value > 0)
            this.speed -= value;
    }
    stop() {
        this.speed = 0;
    }
    get Speed() {
        return this.speed;
    }
}
const car = new Vehicle();
car.speedUp(3);
car.speedUp(2);
car.slowDown(1);
console.log(car.Speed);
