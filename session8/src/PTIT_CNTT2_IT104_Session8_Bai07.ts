const flatten = <T>(arr: T[][]): T[] => {
    return arr.reduce((res, element) => res.concat(element), []);
}

const flattenedArrayNumber = flatten([[1, 2], [3, 4, 5], [6]]);
console.log(flattenedArrayNumber);

const flattenedArrayString = flatten([['apple', 'banana'], ['cherry'], ['date', 'elderberry']]);
console.log(flattenedArrayString);
