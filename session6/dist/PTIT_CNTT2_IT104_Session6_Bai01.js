"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    _name;
    constructor(_name) {
        this._name = _name;
    }
    get name() {
        return this._name;
    }
}
class Rectangle extends Shape {
    width;
    height;
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        return this.height * this.width;
    }
}
const rectangle = new Rectangle("ABCD", 3, 8);
console.log(rectangle.getSize());
