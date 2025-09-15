"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const printSum = (total) => {
    console.log(total);
};
const calculate = (a, b, callback) => {
    callback(a + b);
};
calculate(10, 2, printSum);
