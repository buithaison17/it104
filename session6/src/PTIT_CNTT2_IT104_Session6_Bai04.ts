interface Geometry {
    calculateArea(): number;
    calculatePerimeter(): number;
}

class Circle implements Geometry{
    private radius: number;
    constructor(radius: number){
        this.radius = radius;
    }
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry{
    private width: number;
    private height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const newCircle: Circle = new Circle(3);
const newRectangle: Rectangle = new Rectangle(3, 4);
console.log(newCircle.calculateArea().toFixed(2));
console.log(newCircle.calculatePerimeter().toFixed(2));
console.log(newRectangle.calculateArea());
console.log(newRectangle.calculatePerimeter());