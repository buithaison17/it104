"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findElement = (arr, value) => {
    for (const element of arr) {
        if (value === element)
            return element;
    }
    return undefined;
};
console.log(findElement([1, 2, 3, 4, 5], 2));
