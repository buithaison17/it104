import React, { useState } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouter {
	children: React.ReactNode;
}

export const PrivateRouter: React.FC<PrivateRouter> = ({ children }) => {
	const [isAuth] = useState(true);
	return isAuth ? children : <Navigate to="/login" replace></Navigate>;
};
