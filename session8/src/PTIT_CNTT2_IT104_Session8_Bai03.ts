const reverseArray = <T>(arr: T[]): T[] => {
    const reversedArray = [...arr].reverse();
    return reversedArray;
}

console.log(reverseArray<string>(["a", "b", "c"]));