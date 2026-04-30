import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { useLocation } from "react-router-dom"; // reads the current route
import { useState, useEffect } from "react"; // manages component state
import { BASE_URL, getAccount } from "../services/api"; // BASE_URL to check if API is set, getAccount to fetch data

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation(); // tracks the current route (e.g. "/withdraw", "/deposit")

    // account data — starts empty, filled by API on load
    const [name, setName] = useState("");
    const [agency, setAgency] = useState("");
    const [account, setAccount] = useState("");

    // runs every time the route changes — fetches name, agency and account from GET /
    useEffect(() => {
        if (!BASE_URL) return; // skips API call if URL is not set yet (user hasn't entered it)
        getAccount().then((data) => {
            setName(data.name);       // "Vitor Soller"
            setAgency(data.agency);   // "0000"
            setAccount(data.account); // "00000-0"
        });
    }, [location.pathname]); // runs whenever the route changes

    // only navigates if user is NOT already on home page
    const validateLogoRedirection = () => {
        if (location.pathname !== "/") {
            navigate("/account"); // navigates to account page when clicking DevBank logo
        }
    }

    return(
        <header className="flex items-center justify-between bg-blue-500 px-6 py-3">
            <nav>
                <ul>
                    {/* clicking DevBank logo navigates to /account — only if not already on home */}
                    <li onClick={validateLogoRedirection} className="text-white font-bold text-6xl">DevBank</li>
                </ul>
            </nav>

            <section className="flex items-center justify-between gap-10">
                {/* displays account info fetched from GET / */}
                <div className="bg-white rounded-lg px-4 py-2 text-blue-500 text-sm">
                    <p>Nome: <span>{name}</span></p>
                    <p>Agência: <span>{agency}</span></p>
                    <p>Conta: <span>{account}</span></p>
                </div>

                {/* placeholder for profile picture */}
                <div className="w-20 h-20 bg-white rounded-full"></div>
            </section>
        </header>
    );
}

export default Header;