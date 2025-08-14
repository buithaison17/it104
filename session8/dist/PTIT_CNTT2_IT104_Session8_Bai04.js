"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const combineObject = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
const person = {
    name: "Sơn Bùi",
    age: 19,
};
const address = {
    city: "Thái Bình",
    country: "Việt Nam",
};
console.log(combineObject(person, address));
