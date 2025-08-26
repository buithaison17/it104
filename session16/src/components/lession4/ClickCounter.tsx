import { useState } from "react"

export const ClickCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<h1>Số lần click hiện tại: {count}</h1>
			<button onClick={() => setCount(count + 1)}>Click để tăng số lần đếm</button>
		</>
	)
}


