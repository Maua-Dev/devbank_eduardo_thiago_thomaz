import { Link } from "react-router-dom";
import { getAccount } from "../services/api";
import { useState, useEffect } from "react";

export default function Account() {
  const [balance, setBalance] = useState<number | null>(null);
  
  useEffect(() => {
    async function carregarSaldo() {
      try {
        // Vai ao back-end buscar os dados da conta
        const dadosDaConta = await getAccount();
        
        // Atualizamos a tela com o valor que veio da API
        // ATENÇÃO: Dependendo de como a sua equipa construiu a API, 
        // a propriedade pode chamar-se 'saldo', 'balance', 'value', etc.
        setBalance(dadosDaConta.balance); 
        
      } catch (erro) {
        console.error("Erro ao carregar o saldo da API:", erro);
        // Se a API falhar ou estiver desligada, podemos colocar um saldo de segurança/erro
        setBalance(0); 
      }
    }

    carregarSaldo();
  }, []);
  return (
    <main className="min-h-screen bg-[#f4f7f9] flex flex-col items-center pt-10 px-4">
      
      <section className="w-full max-w-5xl bg-[#b3d4f5] rounded-xl flex items-center justify-between mb-8 overflow-hidden shadow-sm">
        <header className="p-6">
          <h2 className="text-2xl text-black font-medium">
            O que você deseja fazer?
          </h2>
        </header>
        <div className="bg-[#8cbbf1] p-6 h-full flex items-center justify-center min-w-75">
          <p className="text-white text-xl font-bold">
            Saldo atual: {balance !== null ? `R$ ${balance}` : "Carregando..."}
          </p>
        </div>
      </section>
      
      <nav aria-label="Navegação de transações" className="w-full max-w-5xl flex gap-6 justify-center">
        <Link 
          to="/deposit" 
          className="flex-1 bg-[#8cbbf1] border-8 border-[#b3d4f5] hover:bg-[#6fa8eb] transition-colors rounded-xl h-100 flex items-center justify-center shadow-sm">
          <span className="text-white text-4xl font-bold">
            Depositar
          </span>
        </Link>

        <Link 
          to="/withdraw" 
          className="flex-1 bg-[#8cbbf1] border-8 border-[#b3d4f5] hover:bg-[#6fa8eb] transition-colors rounded-xl h-100 flex items-center justify-center shadow-sm">
          <span className="text-white text-4xl font-bold">
            Sacar
          </span>
        </Link>

        <Link 
          to="/history" 
          className="flex-1 bg-[#8cbbf1] border-8 border-[#b3d4f5] hover:bg-[#6fa8eb] transition-colors rounded-xl h-100 flex items-center justify-center shadow-sm">
          <span className="text-white text-4xl font-bold">
            Transações
          </span>
        </Link>
      </nav>
    </main>
  );
}