import { useNavigate } from "react-router-dom";

export default function Home(){
  const navigate = useNavigate();

  return(
    <main>
      <button onClick={() => navigate("/withdraw")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Saque</button>
      <button onClick={() => navigate("/deposit")} className="w-50 h-20 bg-blue-300 rounded-xl m-10">Deposit</button>
    </main>
  )
}
