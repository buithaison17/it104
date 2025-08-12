interface ChangeSpeed {
    speedUp(value: number): void;
    slowDown(value: number): void
    stop(): void;
}

class Vehicle implements ChangeSpeed {
    private speed: number;
    constructor(){
        this.speed = 0;
    }
    speedUp(value: number): void {
        if(value > 0) this.speed += value;
    }
    slowDown(value: number): void {
        if(value <= this.speed && value > 0) this.speed -= value;
    }
    stop(): void {
        this.speed = 0;
    }
    get Speed(): number{
        return this.speed
    }
}

const car: Vehicle = new Vehicle();
car.speedUp(3);
car.speedUp(2);
car.slowDown(1)
console.log(car.Speed);
