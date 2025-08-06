"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "banana";
const filterDupliCateChar = (str) => {
    let chars = str.split("");
    let result = "";
    let seen = new Set();
    for (const char of chars) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
};
console.log(filterDupliCateChar(str));
//# sourceMappingURL=main.js.map