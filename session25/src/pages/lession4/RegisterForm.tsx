import { Button, Input } from "antd";

export const RegisterForm = () => {
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
			<div className="mt-4 flex flex-col gap-1">
				<label htmlFor="password">Confirm Password</label>
				<Input
					type="password"
					id="confirm-password"
					placeholder="Place your confirm password"
				/>
			</div>
			<Button className="mt-4 w-full" type="primary">
				Create an account
			</Button>
			<div className="mt-5 text-gray-400 text-center hover:cursor-pointer">
				Already have an account?
				<span className="text-gray-600 hover:underline">Login here</span>
			</div>
		</form>
	);
};
