"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isPrime = (input) => {
    for (let i = 2; i <= Math.sqrt(input); i++) {
        if (input % i === 0)
            return false;
    }
    return true;
};
const isCheckAllNumber = (input) => {
    for (const char of input) {
        const charConvert = Number(char);
        if (Number.isNaN(charConvert))
            return false;
    }
    return true;
};
const filterNumber = (input) => {
    let result = "";
    for (const char of input) {
        const charConvert = Number(char);
        if (!Number.isNaN(charConvert))
            result += charConvert;
    }
    return result;
};
const processInput = (input) => {
    if (typeof input === "string") {
        if (isCheckAllNumber(input)) {
            const result = Math.pow(Number(input), 2).toString();
            console.log(result);
        }
        else {
            const result = filterNumber(input);
            console.log(result);
        }
    }
    else if (typeof input === "number") {
        isPrime(input) ? console.log("Đây là số nguyên tố") : console.log("Đây không phải số nguyên tố");
    }
    else {
        input ? console.log("Giá trị true - đang xử lí") : console.log("Giá trị false - dừng xử lí");
    }
};
processInput(false);
//# sourceMappingURL=main.js.map