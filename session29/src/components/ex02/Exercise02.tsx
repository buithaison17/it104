export const Exercise02 = () => {
	const getAllProduct = async (): Promise<void> => {
		const response = await fetch("http://localhost:3000/products");
		const datas = await response.json();
		console.log(datas);
	};
	getAllProduct();
	return <div>Exercise02</div>;
};
