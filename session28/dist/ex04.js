"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printNumber = (num) => {
    console.log(num);
};
const displayNumbers = (timeDelay, callback) => {
    let index = 1;
    setInterval(() => {
        callback(index);
        index++;
    }, timeDelay);
};
displayNumbers(1000, printNumber);
