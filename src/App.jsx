import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
	return (
		<>
			<BrowserRouter>
				<ToastContainer />
				<AppRoutes />
			</BrowserRouter>
		</>
	);
}

export default App;
