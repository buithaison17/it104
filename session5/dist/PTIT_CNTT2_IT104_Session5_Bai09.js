"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    _name;
    _age;
    _species;
    constructor(name, age, species) {
        this._name = name;
        this._age = age;
        this._species = species;
    }
    speak() { }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }
}
class Dog extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Dog");
        this.breed = breed;
    }
    speak() {
        console.log("Woof");
    }
}
class Cat extends Animal {
    breed;
    constructor(name, age, bread) {
        super(name, age, "Cat");
        this.breed = bread;
    }
    speak() {
        console.log("Meow");
    }
}
class Rabit extends Animal {
    breed;
    constructor(name, age, breed) {
        super(name, age, "Rabit");
        this.breed = breed;
    }
    speak() {
        console.log("Squeak");
    }
}
const newDog = new Dog("Trôn", 19, "Chó hoang hư hỏng");
const newCat = new Cat("Phôn", 19, "Mèo hoang hư hỏng");
const newRabit = new Rabit("Chổi", 19, "Thỏ hoang hư hỏng");
console.log(newDog);
newDog.speak();
console.log(newCat);
newCat.speak();
console.log(newRabit);
newRabit.speak();
