// defines what props this component receives from the parent (Withdraw/Deposit)
interface ValueCardProps {
    image: string; // bill image URL from assets
    value: number; // bill value (2, 5, 10, 20, 50, 100, 200)
    quantity: number; // how many of this bill the user selected — controlled by parent
    onQuantityChange: (quantity: number) => void; // notifies parent when user clicks + or -
}

const ValueCard = ({ image, value, quantity, onQuantityChange }: ValueCardProps) => {
    // if quantity is already 0, do nothing — prevents negative values
    const minus = () => quantity > 0 ? onQuantityChange(quantity - 1) : 0;
    const plus = () => onQuantityChange(quantity + 1); // no limit on max quantity

    return(
        <section className="w-90 h-70 mx-20 my-5 flex flex-col items-center bg-blue-200 rounded-xl shadow-xl/30">
            {/* bill image */}
            <section className="w-9/10 h-7/10 flex justify-center items-center mx-3 my-5 bg-blue-300 rounded-xl shadow-xl/20">
                <img src={image} alt={`R$ ${value}.00 bill`} className="max-w-95/100 rounded-xl"/>
            </section>

            {/* quantity controls */}
            <section className="flex justify-between items-center">
                <div className="w-25 h-10 flex justify-center items-center m-5 bg-blue-300 rounded-xl">Quantidade</div>
                <div className="w-30 h-10 flex justify-between items-center bg-white mx-3 p-3 rounded-xl">
                    <button onClick={minus} className="cursor-pointer text-2xl">-</button>
                    <span>{quantity}</span> {/* quantity comes from parent state, not local state */}
                    <button onClick={plus} className="cursor-pointer">+</button>
                </div>
            </section>
        </section>
    );
};

export default ValueCard;