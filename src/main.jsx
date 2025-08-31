import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./appRoutes/App.jsx";
import { Provider } from "react-redux";
import { AppStore } from "./store/appStore";
import { BrowserRouter } from "react-router";
import "./i18n/i18n";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={AppStore}>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
);
