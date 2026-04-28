import { useState, useEffect } from "react"; // manages component state
import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { getTransactions } from "../services/api"; // fetches transaction history from GET /transactions
import TransactionCard from "../components/transactionCard"; // card that displays each transaction

export const History = () => {
    const navigate = useNavigate();

    // stores the list of transactions fetched from the API
    // starts empty — filled when GET /transactions responds
    const [transactions, setTransactions] = useState<any[]>([]);

    // runs once when page loads — fetches transaction history from GET /transactions
    // TODO: backend must implement GET /transactions returning this format:
    // [{ id, type: "deposito" | "saque", value, date, balance }]
    useEffect(() => {
        getTransactions().then((data) => {
            if (Array.isArray(data)) { // safety check — only saves if API returned a list
                setTransactions(data);
            }
        });
    }, []); // [] means runs only once on mount

    return (
        <main>
            <section className="mx-20 my-10 flex justify-center items-center">
                <div className="bg-blue-200 px-10 py-6 rounded-xl shadow-md border-2 border-blue-300">
                    <p className="text-5xl font-serif">Histórico de Transações</p>
                </div>
            </section>

            {/* maps through transactions list and renders one TransactionCard per item */}
            {/* each card expects: type, value, date, balance */}
            <section className="flex flex-col items-center mx-20 gap-2">
                {transactions.map((transaction: any) => (
                    <div key={transaction.id} className="w-full max-w-4xl">
                        <TransactionCard
                            type={transaction.type as "deposito" | "saque"} // "deposito" or "saque"
                            value={transaction.value}   // transaction amount
                            date={transaction.date}     // transaction date
                            balance={transaction.balance} // balance after transaction
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