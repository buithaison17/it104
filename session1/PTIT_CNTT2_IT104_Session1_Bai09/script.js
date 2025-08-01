const firstArr = [1,2,3,5,9];
const twoArr = [4,6,7,8];
const result = [...firstArr,...twoArr];
result.sort((a,b) => a- b);
console.log(result);