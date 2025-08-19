const filterByType = (arr: any[], types: string[]): any[] => {
    return arr.filter(item => {
        const itemType = item === null ? "null" : typeof item;
        return types.includes(itemType);
    })
}

const mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];

const result = filterByType(mixedArray, ['number', 'string'])

console.log(result);
