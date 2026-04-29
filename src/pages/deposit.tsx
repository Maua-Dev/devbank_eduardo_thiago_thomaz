import { useState, useEffect } from "react"; // manages component state
import Balance from "../components/balance"; // shows current balance and total value
import ValueCard from "../components/valueCard"; // card for each bill
import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { notes } from "../data/notes"; // list of bills with image and value
import { getAccount, postDeposit } from "../services/api"; // API calls

export const Deposit = () => {
    const navigate = useNavigate();

    // balance starts at 0 — real value is fetched from API on page load (current_balance)
    const [balance, setBalance] = useState(0);

    // tracks how many of each bill the user selected
    // { 2: 3, 5: 1 } = 3 bills of R$2 and 1 bill of R$5
    const [quantities, setQuantities] = useState<Record<number, number>>({});

    // runs once when page loads — fetches current_balance from GET /
    useEffect(() => {
        getAccount().then((data) => {
            setBalance(data.current_balance); // data.current_balance comes from the API
        });
    }, []); // [] means runs only once on mount

    // multiplies each bill by its quantity and sums everything
    // ?? 0 = if bill was never selected, use 0
    const totalValue = notes.reduce((total, note) => {
        return total + (quantities[note.value] ?? 0) * note.value;
    }, 0);

    // builds a payload with the bills, so that the API reads it fine
    const billsPayload = () => {
        return notes.reduce((payload, note) => {
            payload[note.value] = quantities[note.value] ?? 0;
            return payload;
        }, {} as Record<number, number>);
    };

    // runs when user clicks "Depositar"
    const handleDeposit = async () => {
        if (totalValue === 0) return alert("Selecione ao menos uma cédula.");
        const payload = billsPayload();
        const response = await postDeposit(payload);
        setBalance(response.current_balance); // updates balance locally
        setQuantities({}); // resets all quantities to 0
        alert("Depósito realizado com sucesso!");
    };

    return (
        <main>
            {/* Balance component — receives current balance and total to be deposited */}
            <Balance balance={balance} totalValue={totalValue} label="Valor a ser depositado:" />

            <section className="h-15 mx-20 my-10 flex justify-center items-center">
                <p className="text-5xl font-serif">Selecione as cédulas e a quantidade que você deseja.</p>
            </section>

            {/* grid with 3 cards per row — last card centered if alone */}
            <section className="grid grid-cols-3 gap-4">
                {notes.map((note, index) => (
                    <div key={note.value} className={index === notes.length - 1 && notes.length % 3 !== 0 ? "col-span-3 flex justify-center" : ""}>
                        <ValueCard
                            image={note.image}
                            value={note.value}
                            quantity={quantities[note.value] ?? 0}
                            onQuantityChange={(q) => setQuantities({...quantities, [note.value]: q})}
                            // q = new quantity from ValueCard when user clicks + or -
                            // {...quantities} = copies existing quantities to avoid losing other selections
                            // [note.value]: q = updates only this bill's quantity
                        />
                    </div>
                ))}
            </section>

            <section className="flex justify-center items-center my-8">
                <button onClick={() => navigate("/account")} className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer"><p className="text-4xl">Voltar</p></button>
                <button onClick={handleDeposit} className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer"><p className="text-4xl">Depositar</p></button>
            </section>
        </main>
    );
}