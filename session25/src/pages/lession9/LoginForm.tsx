import { Button, Input } from "antd";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
	const navigate = useNavigate();
	return (
		<form className="w-[500px] p-6 rounded-xl shadow-xl m-auto">
			<h1 className="text-center text-[20px] font-bold">Login Account</h1>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="email">Your Email</label>
				<Input type="email" id="email" placeholder="name@company.com" />
			</div>
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="password">Password</label>
				<Input
					type="password"
					id="password"
					placeholder="Place your password"
				/>
			</div>
			<Button className="mt-4 w-full" type="primary">
				Login an account
			</Button>
			<div className="mt-5 text-gray-400 text-center hover:cursor-pointer">
				Already have an account?
				<span
					onClick={() => navigate("/register")}
					className="text-gray-600 hover:underline ml-1"
				>
					Register here
				</span>
			</div>
		</form>
	);
};
