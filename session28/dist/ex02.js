"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const result = (timeDelay) => {
    console.log("Hàm được gọi sau: ", timeDelay);
};
const delayedCallback = (timeDelay, callback) => {
    setTimeout(() => {
        callback(timeDelay);
    }, timeDelay);
};
console.log(delayedCallback(1000, result));
