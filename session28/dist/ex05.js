"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const display = (condition) => {
    console.log("Điều kiện trả về: ", condition);
};
const checkCondition = (condition, callback) => {
    setTimeout(() => {
        callback(condition);
    }, 1000);
};
checkCondition(true, display);
checkCondition(false, display);
