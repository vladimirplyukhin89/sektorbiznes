import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";

import { store } from "./store/index";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
