import {BrowserRouter} from "react-router-dom";
import "./App.css";
import AppRoutes from "./router/AppRoutes";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {Provider} from "react-redux";
import {store} from "./app/store.js";

function App() {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <ToastContainer/>
                    <AppRoutes/>
                </BrowserRouter>
            </Provider>
        </>
    );
}

export default App;
