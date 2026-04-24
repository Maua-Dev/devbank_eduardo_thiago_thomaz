import { useState } from "react"; // state
import Balance from "../components/balance"; // component balance
import ValueCard from "../components/valueCard"; // cards notes
import { useNavigate } from "react-router-dom"; // routes
import { notes } from "../data/notes"; // import list notes images


export const Withdraw = () => {
    const navigate = useNavigate(); // routes 

    const [quantities, setQuantities] = useState<Record<number, number>>({}); 
    /*
        Record<number, number> é um tipo TypeScript que significa "objeto onde a chave é number e o 
        valor é number". Na prática fica assim:
        {
            2: 3,   // nota de R$2, quantidade 3
            5: 1,   // nota de R$5, quantidade 1
            10: 0,  // nota de R$10, quantidade 0
        }

        O {} é o valor inicial — começa vazio, sem nenhuma nota selecionada.
    */

    const totalValue = notes.reduce((total, note) => {
        return total + (quantities[note.value] ?? 0) * note.value;
    }, 0);

    /*
        O reduce percorre a lista e acumula um resultado. Funciona assim:

        Começa com total = 0 (o 0 no final é o valor inicial)
        Para cada note da lista, soma ao total: quantidade da nota × valor da nota
        O ?? 0 significa "se não existir no objeto, usa 0"
    */

    return (
        <main>
            <Balance totalValue={totalValue} />

            <section className="h-15 mx-20 my-10 flex justify-center items-center">
                <p className="text-5xl font-serif">Selecione as cédulas e a quantidade que você deseja.</p>
            </section>

            <section className="grid grid-cols-3 gap-4"> {/* grid column and three cards per row. */}
                {notes.map((note, index) => ( // map => scrolls through the list of notes
                    <div key={note.value} className={index === notes.length - 1 && notes.length % 3 !== 0 ? "col-span-3 flex justify-center" : ""}> {/* Check the last note and center the image */}
                        <ValueCard
                            image={note.image}
                            value={note.value}
                            quantity={quantities[note.value] ?? 0}
                            onQuantityChange={(q) => setQuantities({...quantities, [note.value]: q})}
                        />
                    </div>
                ))}
            </section>

            <section className="flex justify-center items-center">
                <button onClick={() => navigate("/")} className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer"><p className="text-4xl">Voltar</p></button>
                <button className="w-60 h-20 bg-blue-500 text-white rounded-xl mx-10 cursor-pointer"><p className="text-4xl">Sacar</p></button>
            </section>
        </main>
    );
}