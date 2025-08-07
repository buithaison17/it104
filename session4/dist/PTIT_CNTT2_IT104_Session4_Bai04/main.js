"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleUnionType = (input) => {
    if (typeof input === 'string')
        console.log(`ouput: ${input.length} kí tự`);
    else if (input % 2 === 0)
        console.log('Đây là số chẵn');
    else
        console.log('Đây là số lẻ');
};
handleUnionType(2);
//# sourceMappingURL=main.js.map