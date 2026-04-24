interface ValueCardProps {
    image: string;
    value: number;
    quantity: number;
    onQuantityChange: (quantity: number) => void; // return void
}

const ValueCard = ({ image, value, quantity, onQuantityChange }: ValueCardProps) => {
    const minus = () => quantity > 0 ? onQuantityChange(quantity - 1) : 0;
    const plus = () => onQuantityChange(quantity + 1);

    return(
        <section className="w-90 h-70 mx-20 my-5 flex flex-col items-center bg-blue-200 rounded-xl shadow-xl/30">
            <section className="w-9/10 h-7/10 flex justify-center items-center mx-3 my-5 bg-blue-300 rounded-xl shadow-xl/20">
                <img src={image} alt={`R$ ${value}.00 bill`} className="max-w-95/100 rounded-xl"/>
            </section>

            <section className="flex justify-between items-center">
                <div className="w-25 h-10 flex justify-center items-center m-5 bg-blue-300 rounded-xl">Quantidade</div>
                <div className="w-30 h-10 flex justify-between items-center bg-white mx-3 p-3 rounded-xl">
                    <button onClick={minus} className="cursor-pointer text-2xl">-</button>
                    <span>{quantity}</span>
                    <button onClick={plus} className="cursor-pointer">+</button>
                </div>
            </section>
        </section>
    );
};

export default ValueCard;