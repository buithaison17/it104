"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reverseArray = (arr) => {
    const reversedArray = [...arr].reverse();
    return reversedArray;
};
console.log(reverseArray(["a", "b", "c"]));
