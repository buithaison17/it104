"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 3, 4, 5, 6];
const condition = (num) => {
    return num * 2;
};
const myMap = (arr, callback) => {
    const result = [];
    for (const element of arr) {
        result.push(callback(element));
    }
    return result;
};
const result = myMap(numbers, condition);
console.log(result);
