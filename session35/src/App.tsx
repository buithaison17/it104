import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import { Exercise07 } from "./components/Exercise07";

function App() {
	return (
		<Provider store={store}>
			<Exercise07></Exercise07>
		</Provider>
	);
}

export default App;
