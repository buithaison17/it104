"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeObjects = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
const result = mergeObjects({ name: "Join" }, { role: "Developer" });
console.log(result);
