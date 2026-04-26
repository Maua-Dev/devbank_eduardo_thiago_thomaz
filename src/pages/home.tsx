import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate = useNavigate();

  return(
    <main>
<<<<<<< HEAD
      <button onClick={() => navigate("/withdraw")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Saque</button>
      <button onClick={() => navigate("/deposit")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Deposit</button>
=======
      <button onClick={() => navigate("/withdraw")} className="w-50 h-20 bg-blue-300 rounded-xl mx-auto my-10">Saque</button>
      {" "} 
      <button onClick={() => navigate("/history")} className="w-50 h-20 bg-blue-300 rounded-xl mx-auto my-10">Transações</button>
>>>>>>> c60e32c7410b2bf138d5c327cbf6a89b8d7d9fb8
    </main>
  ) // não descobri a melhor forma de adicionar espaço entre os botões
}
