import { useNavigate } from "react-router-dom"; // routes
import { transactions } from "../data/transactions" // transactions list
import TransactionCard from "../components/transactionCard"; // cards transactions

export const History = () => {
    const navigate = useNavigate(); // routes 

    // 

    return (
        <main>

            <section className="mx-20 my-10 flex justify-center items-center">
                <div className="bg-blue-200 px-10 py-6 rounded-xl shadow-md border-2 border-blue-300">
                    <p className="text-5xl font-serif">Histórico de Traasdasdnsações</p>
                </div>
            </section>

            <section className="flex flex-col items-center mx-20 gap-2">
                {transactions.map((transaction) => (
                    <div key={transaction.id} className="w-full max-w-4xl">
                        <TransactionCard 
                            type={transaction.type as "deposito" | "saque"} 
                            value={transaction.value} 
                            date={transaction.date} 
                            balance={transaction.balance} 
                        />
                    </div>
                ))}
            </section>

            <section className="flex justify-center items-center my-10">
                <button onClick={() => navigate("/")} className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer">
                    <p className="text-4xl">Voltar</p>
                </button>
            </section>
            
        </main>
    );
}