const arr: number[] = [1, 2, 3, 4, 5, 6];

const print = (element: number, index: number, arr: number[]): void => {
	console.log(`Vị trí: ${index} | Phần tử: ${element} | Mảng: ${arr}`);
};

const myForEach = (arr: number[], callback: Function): void => {
	for (let i = 0; i < arr.length; i++) {
		print(arr[i]!, i, arr);
	}
};

myForEach(arr, print);
