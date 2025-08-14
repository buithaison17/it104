const flattent = <T>(arr: T[]): T[] => {
    let result: T[] = [];
    for (const element of arr) {
        if(Array.isArray(element)){
            result = result.concat(flattent(element));
        }
        else{
            result.push(element);
        }
    }
    return result;
}

console.log(flattent([1, [2, [3, 4], 5], 6]));
