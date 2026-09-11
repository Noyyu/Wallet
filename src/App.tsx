import { BrowserRouter} from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import "./index.css";

export default function App() {
    return (
        <BrowserRouter>
        <section className = "app">
            <AppRouter/>
        </section>
        </BrowserRouter>
    )
}
