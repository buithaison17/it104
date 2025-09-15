"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numbers = [1, 2, 2, 3, 4, 5, 6];
const isEqual = (elementOfArr, num) => {
    return num === elementOfArr;
};
const myFilter = (arr, num, callback) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], num))
            result.push(arr[i]);
    }
    return result;
};
const result = myFilter(numbers, 10, isEqual);
console.log(result);
