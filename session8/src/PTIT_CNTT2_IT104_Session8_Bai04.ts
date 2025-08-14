interface Person {
    name: string;
    age: number;
}

interface Address {
    city: string;
    country: string;
}

const combineObject = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2};
}

const person: Person = {
    name: "Sơn Bùi",
    age: 19,
}

const address: Address = {
    city: "Thái Bình",
    country: "Việt Nam",
}

console.log(combineObject(person, address));