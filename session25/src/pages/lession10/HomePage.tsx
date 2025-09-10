export const HomePage = () => {
	const email = localStorage.getItem("account");
	return (
		<div>
			<h1 className="text-[20px]">Home Page</h1>
			<div>Email: {email}</div>
		</div>
	);
};
