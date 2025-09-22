import { Provider } from "react-redux";
import "./App.css";
import { store } from "./store/store";
import { ShoppingCart } from "./components/ShoppingCart";

function App() {
	return (
		<Provider store={store}>
			<ShoppingCart></ShoppingCart>
		</Provider>
	);
}

export default App;
