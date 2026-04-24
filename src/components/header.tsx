import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    return(
        <header className="flex items-center justify-between bg-blue-500 px-6 py-3">
            <nav>
                <ul>
                    <li onClick={() => navigate("/")} className="text-white font-bold text-6xl">DevBank</li>
                </ul>
            </nav>

            <section className="flex items-center justify-between gap-10">
                <div className="bg-white rounded-lg px-4 py-2 text-blue-500 text-sm">
                    <p>Nome: Vitor</p>
                    <p>Agência: 0000</p>
                    <p>Conta: 00000-0</p>
                </div>

                <div className="w-20 h-20 bg-white rounded-full">                   
                </div>  
            </section>
        </header>
    );
}

export default Header;