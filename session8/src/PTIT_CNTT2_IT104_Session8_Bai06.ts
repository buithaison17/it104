const findElement = <T>(arr: T[], value: T): T | undefined => {
    for (const element of arr) {
        if(value === element) return element;
    }
    return undefined;
}

console.log(findElement<number>([1, 2, 3, 4,5], 2));