"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, 2, 3, 4, 5];
const printElement = (a) => {
    console.log(a);
};
const processArray = (arr, callback) => {
    for (const element of arr) {
        setTimeout(() => {
            callback(element);
        }, 1000);
    }
};
processArray(arr, printElement);
