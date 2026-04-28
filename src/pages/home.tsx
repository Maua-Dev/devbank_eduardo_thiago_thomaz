import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { setBaseUrl } from "../services/api"; // sets the API URL before navigating

// API URL loaded from .env file (VITE_API_URL)
// TODO: replace with input field so user can type the URL
const API_URL = import.meta.env.VITE_API_URL;

export default function Home() {
    const navigate = useNavigate();

    // sets the API URL and navigates to the selected page
    // must be called before any API request — all pages depend on BASE_URL being set
    const handleEnter = (path: string) => {
        setBaseUrl(API_URL); // defines BASE_URL in api.ts before navigating
        navigate(path);      // navigates to the selected page
    };

    return(
        <main>
            <button onClick={() => handleEnter("/withdraw")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Saque</button>
            <button onClick={() => handleEnter("/deposit")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Depósito</button>
            <button onClick={() => handleEnter("/history")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Transações</button>
        </main>
    );
}