"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkElement = (arr) => {
    for (const element of arr) {
        if (typeof element === "number" && element % 2 === 0)
            return element;
    }
    return undefined;
};
console.log(checkElement([1, 2, 3, 4, 5]));
