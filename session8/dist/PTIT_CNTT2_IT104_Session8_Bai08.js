"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const partialUpdate = (obj, updates) => {
    return { ...obj, ...updates };
};
const user = {
    id: 1,
    name: "Sơn Bùi",
    email: "sonbui@gmail.com",
    age: 19,
};
console.log(partialUpdate(user, { name: "Bùi Sơn" }));
