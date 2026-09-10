import { BrowserRouter, Link } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import "./App.css";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/add"> Add Card </Link>
                </nav>
            </header>
            <AppRouter/>
        </BrowserRouter>
    )
}
