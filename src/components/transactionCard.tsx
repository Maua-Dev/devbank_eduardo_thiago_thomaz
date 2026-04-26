interface TransactionCardProps {
    type: "deposito" | "saque";
    value: number;
    date: string;
    balance: number;
}

const TransactionCard = ({ type, value, date, balance }:TransactionCardProps) => {
    const isDeposit = type === "deposito";
    const headerColor = isDeposit ? "bg-green-700" : "bg-red-600";
    const headerTitle = isDeposit ? "Deposito" : "Saque";

    return(
        <article className="w-full bg-blue-300 rounded-md shadow-md mb-6 overflow-hidden">

            <header className={`w-full py-2 text-white text-center font-bold ${headerColor}`}>
                {headerTitle}
            </header>

            <div className="flex justify-around items-center p-6 bg-blue-200">
                <div className="flex flex-col items-center">
                    <p>VALOR:</p>
                    <span className="text-blue-600">R$ {value}</span>
                </div>

                <div className="flex flex-col items-center">
                    <p>DATA:</p>
                    <span className="text-blue-600">{date}</span>
                </div>

                <div className="flex flex-col items-center">
                    <p>SALDO:</p>
                    <span className="text-blue-600">R$ {balance}</span>
                </div>
            </div>

        </article>
    );
};

export default TransactionCard;