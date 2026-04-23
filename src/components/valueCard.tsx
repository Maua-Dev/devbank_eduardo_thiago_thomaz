import twoMoney from "../assets/two_money.png";

const ValueCard = () => {
    return(
        <section className="w-90 h-70 mx-20 my-5 flex flex-col items-center bg-blue-200 rounded-xl shadow-xl/30">
            <section className="w-9/10 h-7/10 flex justify-center items-center mx-3 my-5 bg-blue-300 rounded-xl shadow-xl/20">
                <img src={twoMoney} alt="Two money" className="max-w-95/100 rounded-xl"/>
            </section>
            <section className="flex">
                <div>Quantidade</div>
                <div className="flex">
                    <button>
                        -
                    </button>
                    <div>0</div>
                    <button>
                        +
                    </button>
                </div>
            </section>
        </section>
    )
}

export default ValueCard;
