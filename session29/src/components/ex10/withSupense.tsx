import React, { Suspense } from "react";
import Spinner from "./Loading";

interface Props {
	children: React.ReactNode;
}

// Component WithSuspense
const WithSuspense: React.FC<Props> = ({ children }) => {
	return <Suspense fallback={<Spinner />}>{children}</Suspense>;
};

export default WithSuspense;
