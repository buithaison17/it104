const numbers: number[] = [1, 2, 3, 4, 5, 6];

const condition = (num: number): number => {
	return num * 2;
};

const myMap = (arr: number[], callback: Function): number[] => {
	const result: number[] = [];
	for (const element of arr) {
		result.push(callback(element));
	}
	return result;
};

const result = myMap(numbers, condition);
console.log(result);