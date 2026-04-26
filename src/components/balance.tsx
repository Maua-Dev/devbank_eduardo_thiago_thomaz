// defines what props this component receives from the parent (Withdraw/Deposit)
interface BalanceProps {
    balance: number;   // current balance coming from App.tsx
    totalValue: number; // total value of selected bills — calculated in Withdraw/Deposit
    label: string;     // dynamic text: "Valor a ser sacado" or "Valor a ser depositado"
};

const Balance = ({ balance, totalValue, label }: BalanceProps) => {
    return (
        <>
            {/* shows the current account balance */}
            <section className="h-20 mx-20 my-5 flex justify-between items-center bg-cyan-500 rounded-xl shadow-xl">
                <div className="mx-10 text-4xl font-serif text-gray-600/90">Saldo</div>
                <div className="flex mx-10 text-4xl font-mono text-gray-600/95 italic">R$ <span>{balance},00</span></div>
            </section>

            {/* shows the total value selected by the user — label changes based on the page */}
            <section className="w-1/2 h-15 mx-auto my-5 flex justify-between items-center bg-sky-500/50 rounded-xl shadow-xl">
                <div className="mx-10 text-2xl font-serif text-gray-600/90">{label}</div>
                <div className="flex mx-10 text-2xl font-mono text-gray-600/95 italic">R$ <span>{totalValue},00</span></div>
            </section>
        </>
    );
};

export default Balance;