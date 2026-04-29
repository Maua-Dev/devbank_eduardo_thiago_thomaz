// defines what data each transaction card expects to receive
// all fields come from GET /transactions response
interface TransactionCardProps {
    type: "deposit" | "withdraw"; // determines card color and title
    value: number;              // transaction amount
    date: string;               // transaction date
    balance: number;            // balance after transaction
}

const TransactionCard = ({ type, value, date, balance }: TransactionCardProps) => {
    // if type is "deposito" → green header, if "saque" → red header
    const isDeposit = type === "deposit";
    const headerColor = isDeposit ? "bg-green-700" : "bg-red-600";
    const headerTitle = isDeposit ? "Deposito" : "Saque";

    // TODO: backend must return transactions in this format for this card to work:
    // { id, type: "deposito" | "saque", value: number, date: string, balance: number }

    return(
        <article className="w-full bg-blue-300 rounded-md shadow-md mb-6 overflow-hidden">
            {/* header color changes based on transaction type */}
            <header className={`w-full py-2 text-white text-center font-bold ${headerColor}`}>
                {headerTitle}
            </header>

            {/* displays transaction details */}
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