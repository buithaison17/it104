"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Circle {
    radius;
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}
const newCircle = new Circle(3);
const newRectangle = new Rectangle(3, 4);
console.log(newCircle.calculateArea().toFixed(2));
console.log(newCircle.calculatePerimeter().toFixed(2));
console.log(newRectangle.calculateArea());
console.log(newRectangle.calculatePerimeter());
