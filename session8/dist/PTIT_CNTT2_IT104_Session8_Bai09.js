"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flattent = (arr) => {
    let result = [];
    for (const element of arr) {
        if (Array.isArray(element)) {
            result = result.concat(flattent(element));
        }
        else {
            result.push(element);
        }
    }
    return result;
};
console.log(flattent([1, [2, [3, 4], 5], 6]));
