import "./App.css";
import HomePage from "./containers/HomePage";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import PageNotFound from "./containers/PageNotFound";
import ContactPage from "./containers/ContactPage";
import ProductDetailPage from "./containers/ProductDetailPage";
import Header from "./components/header";

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                <Route index element={<HomePage />} />

                <Route path="contact" element={<ContactPage />} />
                <Route path="product/:id" element={<ProductDetailPage />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
