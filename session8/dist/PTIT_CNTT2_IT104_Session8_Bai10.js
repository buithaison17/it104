"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const longestUniqueWord = (setence) => {
    const words = setence.split(" ");
    let result = "";
    let maxLength = 0;
    for (const word of words) {
        const set = new Set(word.toLowerCase());
        if (word.length === set.size) {
            if (word.length > maxLength) {
                maxLength = word.length;
                result = word;
            }
        }
    }
    return result;
};
const result = longestUniqueWord("hello world apple banana orange pumpkin cucumber");
console.log(result);
