const checkElement = <T>(arr: T[]): T | undefined => {
    for (const element of arr) {
        if(typeof element === "number" && (element as number) % 2 === 0) return element;
    }
    return undefined;
}

console.log(checkElement<number>([1, 2, 3, 4, 5]));
