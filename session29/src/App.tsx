import { lazy } from "react";
import "./App.css";
import WithSuspense from "./components/ex10/withSupense";

const Exercise10 = lazy(() => import("./components/ex10/Exercise10"));

function App() {
	return (
		<WithSuspense>
			<Exercise10 />
		</WithSuspense>
	);
}

export default App;
