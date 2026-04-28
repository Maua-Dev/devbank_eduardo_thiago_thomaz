import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { useState, useEffect } from "react"; // manages component state
import { getAccount } from "../services/api"; // fetches account data from API

const Header = () => {
    const navigate = useNavigate();

    // account data — starts empty, filled by API on load
    const [name, setName] = useState("");
    const [agency, setAgency] = useState("");
    const [account, setAccount] = useState("");

    // runs once when header loads — fetches name, agency and account from GET /
    // data.name, data.agency, data.account come from the API response
    useEffect(() => {
        getAccount().then((data) => {
            setName(data.name);       // "Vitor Soller"
            setAgency(data.agency);   // "0000"
            setAccount(data.account); // "00000-0"
        });
    }, []); // [] means runs only once on mount

    return(
        <header className="flex items-center justify-between bg-blue-500 px-6 py-3">
            <nav>
                <ul>
                    {/* clicking DevBank navigates back to home */}
                    <li onClick={() => navigate("/")} className="text-white font-bold text-6xl">DevBank</li>
                </ul>
            </nav>

            <section className="flex items-center justify-between gap-10">
                {/* displays account info fetched from API */}
                <div className="bg-white rounded-lg px-4 py-2 text-blue-500 text-sm">
                    <p>Nome: <span>{name}</span></p>
                    <p>Agência: <span>{agency}</span></p>
                    <p>Conta: <span>{account}</span></p>
                </div>

                <div className="w-20 h-20 bg-white rounded-full"></div>
            </section>
        </header>
    );
}

export default Header;