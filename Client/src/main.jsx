
import App from "./App";
import { createRoot } from "react-dom/client";
import'bootstrap/dist/css/bootstrap.min.css';
import "./Style/Admin.css";
import "./Style/Costumer.css";
import store from './store.jsx';
import {Provider} from "react-redux";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
       <App />
    </Provider>
)