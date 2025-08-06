"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum = (a, b) => {
    a = Number(a);
    b = Number(b);
    if (Number.isNaN(a) || Number.isNaN(b))
        return "Không hợp lệ";
    return a + b;
};
const subtraction = (a, b) => {
    a = Number(a);
    b = Number(b);
    if (Number.isNaN(a) || Number.isNaN(b))
        return "Không hợp lệ";
    return a - b;
};
const multiply = (a, b) => {
    a = Number(a);
    b = Number(b);
    if (Number.isNaN(a) || Number.isNaN(b))
        return "Không hợp lệ";
    return a * b;
};
const quotient = (a, b) => {
    a = Number(a);
    b = Number(b);
    if (b === 0)
        return "Không hợp lệ";
    if (Number.isNaN(a) || Number.isNaN(b))
        return "Không hợp lệ";
    return a / b;
};
//# sourceMappingURL=main.js.map