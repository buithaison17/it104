const sum = (arr) => {
    let total = 0;
    for (const element of arr) {
        if(element % 2 == 0) total += element;
    }
    return total;
}

const arr = [1,2,3,4,5,6];

console.log(sum(arr));