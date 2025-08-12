abstract class Shape {
    constructor(protected _name: string){}
    abstract getSize(): number;
    get name(): string{
        return this._name;
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;
    constructor(name: string, width: number, height: number){
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize(): number {
        return this.height * this.width;
    }
}

const rectangle = new Rectangle("ABCD", 3, 8);
console.log(rectangle.getSize());
