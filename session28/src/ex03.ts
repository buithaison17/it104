const arr: number[] = [1, 2, 3, 4, 5];

const printElement = (a: number): void => {
	console.log(a);
};

const processArray = (arr: number[], callback: Function): void => {
	for (const element of arr) {
		setTimeout(() => {
			callback(element);
		}, 1000);
	}
};

processArray(arr, printElement);
