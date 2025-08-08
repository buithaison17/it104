"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    ;
    get Petimeter() {
        return (this.width + this.height) * 2;
    }
    get Area() {
        return this.width * this.height;
    }
}
const newRecTangle = new Rectangle(1, 2);
console.log(newRecTangle.Petimeter);
