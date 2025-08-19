const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => {
    return {...obj1, ...obj2};
}

const result = mergeObjects({name: "Join"}, {role: "Developer"});
console.log(result);