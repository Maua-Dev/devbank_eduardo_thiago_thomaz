import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { setBaseUrl } from "../services/api"; // sets the API URL before navigating
import { useState } from 'react';
// API URL loaded from .env file (VITE_API_URL)
// TODO: replace with input field so user can type the URL

export default function Home() {
    const [apiUrl, setApiUrl] = useState('');
    const [, setError] = useState('');

    const navigate = useNavigate();
    const handleEntrar = (evento: React.FormEvent) => {
        evento.preventDefault(); 
    
        setError('');
        const urlLimpa = apiUrl.trim();

        if (!urlLimpa) {
            const mensagemErro = "Por favor, insira a URL da API.";
            setError(mensagemErro); 
            alert(mensagemErro);    
            return;
    }
        if (!urlLimpa.startsWith('http://') && !urlLimpa.startsWith('https://')) {
            const mensagemErro = "A URL tem de começar com http:// ou https://";
            setError(mensagemErro);
            alert(mensagemErro);
            return;
    }
        try {
      new URL(urlLimpa); 
    } catch {
      const mensagemErro = "O formato da URL parece estar inválido.";
      setError(mensagemErro);
      alert(mensagemErro);
      return;
    }

        setBaseUrl(urlLimpa);
        navigate('/account'); 
  };
  
  
  
    return (
    <main className="min-h-screen bg-[#cce5ff] flex flex-col items-center justify-center relative p-4">
      <button className="cursor-pointer absolute top-8 right-8 bg-white text-blue-500 font-bold text-4xl w-16 h-16 rounded-full shadow-md flex items-center justify-center hover:bg-gray-50 transition">
        ?
      </button>
      <header className="mb-12">
        <h1 className="text-7xl font-black text-white tracking-tighter">
          <span>DEV</span>
          <span className="[text-shadow:5px_-5px_0_#FF4D6D,5px_5px_0_#2563EB]">
            {" "}BANK
          </span>
        </h1>
      </header>
      <form onSubmit={handleEntrar} className="w-full flex flex-col items-center">
        <input value={apiUrl} onChange={(e) => setApiUrl(e.target.value)} 
          type="text" 
          placeholder="Insira a URL da API aqui"
          className="w-full max-w-4xl bg-[#8cbbf1] text-black placeholder-gray-700 text-center text-xl py-4 px-6 rounded-lg focus:outline-none focus:ring-2 transition-colors"
        />    
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