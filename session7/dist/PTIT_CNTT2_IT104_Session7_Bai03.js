"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    printName() {
        console.log(`Tên: ${this.name}`);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Meo Meo");
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log("Gâu Gâu");
    }
}
const newDog = new Dog("Trôn");
newDog.printName();
newDog.makeNoise();
const newCat = new Cat("Phôn");
newCat.printName();
newCat.makeNoise();
