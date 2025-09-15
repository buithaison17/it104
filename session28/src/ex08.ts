const numbers: number[] = [1, 2, 2, 3, 4, 5, 6];

const isEqual = (elementOfArr: number, num: number): boolean => {
	return num === elementOfArr;
};

const myFilter = (arr: number[], num: number, callback: Function): number[] => {
	const result: number[] = [];
	for (let i = 0; i < arr.length; i++) {
		if (callback(arr[i], num)) result.push(arr[i] as number);
	}
	return result;
};

const result: number[] = myFilter(numbers, 10, isEqual);
console.log(result);
