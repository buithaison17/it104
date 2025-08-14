interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

const partialUpdate = <T>(obj: T, updates:Partial<T>): T => {
    return {...obj, ...updates};
}

const user: User = {
    id: 1,
    name: "Sơn Bùi",
    email: "sonbui@gmail.com",
    age: 19,
}

console.log(partialUpdate(user, {name: "Bùi Sơn"}));