const identity = <T>(value: T): T => {
    return value;
}

const result = identity({name: "Sơn Bùi "});
console.log(result, typeof result);