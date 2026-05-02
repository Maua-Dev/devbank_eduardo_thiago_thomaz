import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { setBaseUrl } from "../services/api"; // saves the API URL in BASE_URL and sessionStorage
import { useState } from 'react';

export default function Home() {
    // stores what the user types in the input field
    const [apiUrl, setApiUrl] = useState('');
    // stores error message — second value ignored because error is shown via alert
    const [, setError] = useState('');

    const navigate = useNavigate();

    // runs when user clicks "Entrar"
    const handleEntrar = (evento: React.FormEvent) => {
        evento.preventDefault(); // prevents page from reloading on form submit

        setError('');
        const urlLimpa = apiUrl.trim(); // removes accidental spaces from start/end

        // validation 1 — empty field
        if (!urlLimpa) {
            const mensagemErro = "Por favor, insira a URL da API.";
            setError(mensagemErro);
            alert(mensagemErro);
            return;
        }

        // validation 2 — must start with http:// or https://
        if (!urlLimpa.startsWith('http://') && !urlLimpa.startsWith('https://')) {
            const mensagemErro = "A URL tem de começar com http:// ou https://";
            setError(mensagemErro);
            alert(mensagemErro);
            return;
        }

        // validation 3 — checks if URL format is valid using browser's built-in URL parser
        // throws an error if invalid — caught by try/catch
        try {
            new URL(urlLimpa);
        } catch {
            const mensagemErro = "O formato da URL parece estar inválido.";
            setError(mensagemErro);
            alert(mensagemErro);
            return;
        }
        
        //validation 4 - checks if inputted URL = real URL
        const urlSecreta = import.meta.env.VITE_API_SECRETA;
    
    if (urlSecreta && urlLimpa !== urlSecreta) {
      const mensagemErro = "Acesso negado: A URL fornecida não é a autorizada para este ambiente.";
      setError(mensagemErro);
      alert(mensagemErro);
      return;
    }

        // all validations passed — saves URL in BASE_URL and sessionStorage
        setBaseUrl(urlLimpa);
        navigate('/account'); // navigates to account page
    };

    return (
        <main className="min-h-screen bg-[#cce5ff] flex flex-col items-center justify-center relative p-4">
            {/* help button — placeholder for future help modal */}
            <button className="cursor-pointer absolute top-8 right-8 bg-white text-blue-500 font-bold text-4xl w-16 h-16 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
                ?
            </button>

            {/* DevBank logo */}
            <header className="mb-12">
                <h1 className="text-7xl font-black text-white tracking-tighter">
                    <span>DEV</span>
                    {/* BANK has a glitch/shadow effect using text-shadow */}
                    <span className="[text-shadow:5px_-5px_0_#FF4D6D,5px_5px_0_#2563EB]">
                        {" "}BANK
                    </span>
                </h1>
            </header>

            {/* form — wraps input and button so Enter key also submits */}
            <form onSubmit={handleEntrar} className="w-full flex flex-col items-center">
                {/* API URL input — updates apiUrl state on every keystroke */}
                <input
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                    type="text"
                    placeholder="Insira a URL da API aqui"
                    className="w-full max-w-4xl bg-[#8cbbf1] text-black placeholder-gray-700 text-center text-xl py-4 px-6 rounded-lg focus:outline-none focus:ring-2 transition-colors"
                />

                {/* submit button — triggers handleEntrar */}
                <button
                    type="submit"
                    className="cursor-pointer mt-8 bg-[#007bff] hover:bg-blue-700 text-white font-bold text-xl py-3 px-10 rounded-lg shadow-sm transition"
                >
                    Entrar
                </button>
            </form>
        </main>
    );
}