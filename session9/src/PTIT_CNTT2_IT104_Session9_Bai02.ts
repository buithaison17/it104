const wrapInArray = <T>(value: T): T[] => {
    return [value];
}

console.log(wrapInArray({name: "Sơn Bùi", age: 19}));
