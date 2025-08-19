"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const updateUser = (obj1, obj2) => {
    if ("id" in obj2) {
        return "Id cannot be changed";
    }
    return { ...obj1, ...obj2 };
};
const user = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
const updates1 = {
    id: 2,
    name: "Alice Johnson",
};
const updates2 = {
    name: "Alice Johnson",
};
console.log(updateUser(user, updates1));
console.log(updateUser(user, updates2));
