abstract class Animal {
    constructor(protected name: string) {
        this.name = name;
    }
    abstract makeNoise(): void;
    printName(): void{
        console.log(`Tên: ${this.name}`);
    }
}

class Cat extends Animal{
    constructor(name: string){
        super(name);
    }
    makeNoise(): void {
        console.log("Meo Meo");
    }
}

class Dog extends Animal{
    constructor(name: string){
        super(name);
    }
    makeNoise(): void {
        console.log("Gâu Gâu");
    }
}

const newDog: Dog = new Dog("Trôn");
newDog.printName();
newDog.makeNoise();

const newCat: Cat = new Cat("Phôn");
newCat.printName();
newCat.makeNoise();