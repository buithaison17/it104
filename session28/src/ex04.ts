const printNumber = (num: number): void => {
	console.log(num);
};

const displayNumbers = (timeDelay: number, callback: Function): void => {
	let index = 1;
	setInterval(() => {
		callback(index);
		index++;
	}, timeDelay);
};

displayNumbers(1000, printNumber);
