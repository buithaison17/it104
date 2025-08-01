const merge = (firstArr, twoArr, pos) => {
    if(pos < 0 || pos > firstArr.length){
        console.log("Vị trí không hợp lệ");
        return firstArr;
    }
    const result = [
        ...firstArr.splice(0, pos),
        ...twoArr,
        ...firstArr.splice(pos),
    ];
    return result
}


const firstArr = [1,2,3,7,8];
const twoArr = [4,5,6];
const pos = 2;
const result = merge(firstArr, twoArr, 2);
console.log(result);