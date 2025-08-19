interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
}

type Update = Partial<Omit<User, "id">>;

const updateUser  = <T extends User, U extends Update>(obj1: T, obj2: U): T | string => {
    if("id" in obj2){
        return "Id cannot be changed";
    }
    return {...obj1, ...obj2};
}

const user: User = {
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