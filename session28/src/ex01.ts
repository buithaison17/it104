const printSum = (total: number): void => {
	console.log(total);
};

const calculate = (a: number, b: number, callback: Function): void => {
	callback(a + b);
};

calculate(10, 2, printSum);
