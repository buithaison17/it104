class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    };
    get Petimeter(): number{
       return (this.width + this.height)*2; 
    }
    get Area(): number{
        return this.width * this.height;
    }
}

const newRecTangle = new Rectangle(1, 2);
console.log(newRecTangle.Petimeter);
