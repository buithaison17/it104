"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateUser = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const updates = {
    id: 2,
    name: "Alice Johnson",
};
console.log(updateUser(user, updates));
