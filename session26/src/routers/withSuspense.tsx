import React, { Suspense } from "react";

export function withSuspense(component: React.ReactElement) {
	return <Suspense fallback={<p>Đang tải...</p>}>{component}</Suspense>;
}
