import Balance from "../components/balance";
import ValueCard from "../components/valueCard";

export const Withdraw = () => {
    return (
        <main>
            <Balance />

            <section className="h-15 mx-20 my-10 flex justify-center items-center">
                <p className="text-5xl font-serif">Selecione as cédulas e a quantidade que você deseja.</p>
            </section>

            <section className="flex">
                <ValueCard />
            </section>
        </main>
    );
}