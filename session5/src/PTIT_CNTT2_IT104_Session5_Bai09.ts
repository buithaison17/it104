class Animal {
    private _name: string;
    protected _age: number;
    public _species: string;
    constructor(name: string, age: number, species: string) {
        this._name = name;
        this._age = age;
        this._species = species;
    }
    speak(): void {}
    get name(): string {
        return this._name;
    }
    set name(newName: string) {
        this._name = newName;
    }
    get age(): number {
        return this._age;
    }
    set age(newAge: number) {
        this._age = newAge;
    }
}

class Dog extends Animal {
    public breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age, "Dog");
        this.breed = breed;
    }
    speak(): void {
        console.log("Woof");
    }
}

class Cat extends Animal {
    public breed: string;
    constructor(name: string, age: number, bread: string){
        super(name, age, "Cat");
        this.breed = bread;
    }
    speak(): void {
        console.log("Meow");
    }
}

class Rabit extends Animal {
    public breed: string;
    constructor(name: string, age: number, breed: string){
        super(name, age, "Rabit");
        this.breed = breed;
    }
    speak(): void {
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