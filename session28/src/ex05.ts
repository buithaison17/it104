const display = (condition: boolean): void => {
	console.log("Điều kiện trả về: ", condition);
};

const checkCondition = (condition: boolean, callback: Function): void => {
	setTimeout(() => {
		callback(condition);
	}, 1000);
};

checkCondition(true, display);
checkCondition(false, display);
