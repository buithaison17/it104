"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const str = "hello world apple banana orange pumpkin cucumber";
const findWord = (str) => {
    const words = str.split(" ");
    let result = "";
    let maxLength = 0;
    for (const word of words) {
        let seen = new Set();
        let isCheck = true;
        for (const char of word) {
            if (seen.has(char)) {
                isCheck = false;
                break;
            }
            seen.add(char);
        }
        if (isCheck && word.length > maxLength) {
            maxLength = word.length;
            result = word;
        }
    }
    return result;
};
console.log(findWord(str));
//# sourceMappingURL=main.js.map