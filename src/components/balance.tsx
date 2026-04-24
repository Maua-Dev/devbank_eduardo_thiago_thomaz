interface BalanceProps {
    totalValue: number; // current balance
}

const Balance = ({ totalValue }: BalanceProps) => {
    return (
        <>
            <section className="h-20 mx-20 my-5 flex justify-between items-center bg-cyan-500 rounded-xl shadow-xl">
                <div className="mx-10 text-4xl font-serif text-gray-600/90">Saldo</div>
                <div className="flex mx-10 text-4xl font-mono text-gray-600/95 italic">R$ <span>00,00</span></div>
            </section>

            <section className="w-1/2 h-15 mx-auto my-5 flex justify-between items-center bg-sky-500/50 rounded-xl shadow-xl">
                <div className="mx-10 text-2xl font-serif text-gray-600/90">Valor a ser depositado: </div>
                <div className="flex mx-10 text-2xl font-mono text-gray-600/95 italic">R$ <span>{totalValue},00</span></div>
            </section>
        </>
    );
}

export default Balance;