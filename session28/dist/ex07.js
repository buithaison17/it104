"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arr = [1, 2, 3, 4, 5, 6];
const print = (element, index, arr) => {
    console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${arr}`);
};
const myForEach = (arr, callback) => {
    for (let i = 0; i < arr.length; i++) {
        print(arr[i], i, arr);
    }
};
myForEach(arr, print);
