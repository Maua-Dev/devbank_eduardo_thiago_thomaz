// defines what props this component receives from the parent (Withdraw/Deposit)
interface ValueCardProps {
    image: string; // bill image URL from assets
    value: number; // bill value (2, 5, 10, 20, 50, 100, 200)
    quantity: number; // current quantity — read only, controlled by parent state
    onQuantityChange: (quantity: number) => void; // receives new quantity from parent and notifies it when user clicks + or -
    //A function that returns void and only executes
}

const ValueCard = ({ image, value, quantity, onQuantityChange }: ValueCardProps) => {
    // quantity > 0 check prevents negative values
    // quantity - 1 calculates the new value but does NOT modify quantity
    // sends the new value to parent via onQuantityChange → parent updates state → React re-renders with new quantity
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
                    <span>{quantity}</span> {/* read only — value comes from parent state, not local state */}
                    <button onClick={plus} className="cursor-pointer">+</button>
                </div>
            </section>
        </section>
    );
};

export default ValueCard;