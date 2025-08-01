const arr = [[1,2], [6,7,8], [12, 8]];
const sumArr = [];

arr.reduce((sum, subArr) => {
    const localSum = subArr.reduce((a, b) => a + b, 0);
    sumArr.push(localSum);
}, 0);

console.log(sumArr);
