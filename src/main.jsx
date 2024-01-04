import ReactDOM from "react-dom/client";
import Root from "./companents/Root";
import { BrowserRouter } from "react-router-dom";
import "./assets/style/main.scss";
import LanguageContext from "./context/languageContext";
import LanguageProvider from "./context/languageContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <LanguageProvider>
            <Root />
        </LanguageProvider>
    </BrowserRouter>
);
