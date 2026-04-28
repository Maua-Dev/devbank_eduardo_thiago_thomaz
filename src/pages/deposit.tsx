import { useState } from "react"; // manages component state
import Balance from "../components/balance"; // shows current balance and total value
import ValueCard from "../components/valueCard"; // card for each bill
import { useNavigate } from "react-router-dom"; // enables navigation between pages
import { notes } from "../data/notes"; // list of bills with image and value

export const Deposit = () => {
    const navigate = useNavigate(); // used to navigate between pages

    // Holds the balance state — starts at R$1000
    const [balance, setBalance] = useState(1000);

    // tracks how many of each bill the user selected
    // Record<number, number> = object where key is the bill value and value is the quantity
    // example: { 2: 3, 5: 1 } = 3 bills of R$2 and 1 bill of R$5
    // starts empty {} — no bills selected
    const [quantities, setQuantities] = useState<Record<number, number>>({});

    // goes through the notes list and calculates the total
    // for each note: total + (how many of that bill the user selected ?? 0) × bill value
    // ?? 0 means "if the bill was never selected, use 0 instead of undefined"
    // example: { 2: 3, 5: 1 } → (3 × 2) + (1 × 5) = R$11
    const totalValue = notes.reduce((total, note) => {
        return total + (quantities[note.value] ?? 0) * note.value;
    }, 0);

    // runs when user clicks "Depositar"
    const handleDeposit = () => {
        if (totalValue === 0) return alert("Selecione ao menos uma cédula."); // nothing selected
        setBalance(balance + totalValue); // Add received notes to the current balance.
        setQuantities({}); // resets all bill quantities to 0
        alert("Depósito realizado com sucesso!");
    };

    return (
        <main>
            {/* shows current balance and total to be deposited */}
            <Balance balance={balance} totalValue={totalValue} label="Valor a ser depositado:" />

            <section className="h-15 mx-20 my-10 flex justify-center items-center">
                <p className="text-5xl font-serif">Selecione as cédulas e a quantidade que você deseja.</p>
            </section>

            {/* grid with 3 cards per row */}
            <section className="grid grid-cols-3 gap-4">
                {notes.map((note, index) => (
                    // if last card is alone on the row, center it using col-span-3
                    <div key={note.value} className={index === notes.length - 1 && notes.length % 3 !== 0 ? "col-span-3 flex justify-center" : ""}>
                        <ValueCard
                            image={note.image}
                            value={note.value}
                            quantity={quantities[note.value] ?? 0} // how many of this bill the user selected
                            onQuantityChange={(q) => setQuantities({...quantities, [note.value]: q})} // updates quantity when user clicks + or -
                            // q = new quantity sent by ValueCard when user clicks + or -
                            // {...quantities} = copies all current quantities to avoid losing other selected bills
                            // [note.value]: q = updates only the current bill with the new quantity
                            // example: quantities = { 5: 1 }, user clicks + on R$2 → { 5: 1, 2: 1 }
                        />
                    </div>
                ))}
            </section>

            <section className="flex justify-center items-center my-8">
                <button onClick={() => navigate("/")} className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer"><p className="text-4xl">Voltar</p></button>
                <button onClick={handleDeposit} className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer"><p className="text-4xl">Depositar</p></button>
            </section>
        </main>
    );
}