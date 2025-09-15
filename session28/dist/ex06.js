"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1 hoàn thành sau 1 giây");
            resolve();
        }, 1000);
    });
};
const task2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2 hoàn thành sau 1.5 giây");
            resolve();
        }, 1500);
    });
};
const task3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 3 hoàn thành sau 2 giây");
            resolve();
        }, 2000);
    });
};
const runTask = async () => {
    await task1();
    await task2();
    await task3();
    console.log("Tất cả đã hoàn thành");
};
runTask();
