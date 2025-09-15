const result = (timeDelay: number): void => {
	console.log("Hàm được gọi sau: ", timeDelay);
};

const delayedCallback = (timeDelay: number, callback: Function): void => {
	setTimeout(() => {
		callback(timeDelay);
	}, timeDelay);
};

console.log(delayedCallback(1000, result));
