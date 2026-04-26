import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home";
import { Withdraw } from './pages/withdraw'
import { Deposit } from "./pages/deposit";
import { History } from './pages/history'
import { useState } from "react";

function App() {
  // Holds the balance state — starts at R$1000
  const [balance, setBalance] = useState(1000); // use all pages

  return (
    <BrowserRouter> {/* enables navigation between pages */}
      <Header /> {/* shows on every page */}
      <Routes> {/* decides which page to render based on the URL */}
        {/* "/" — Home page */}
        <Route path="/" element={<Home />} /> 
        
        {/* "/withdraw" — Withdraw page, receives balance and a function to subtract */}
        <Route path="/withdraw" element={<Withdraw balance={balance} onWithdraw={(v) => setBalance(balance - v)} />} />
        
        {/* "/deposit" — Deposit page, receives balance and a function to add */}
        <Route path="/deposit" element={<Deposit balance={balance} onDeposit={(v) => setBalance(balance + v)} />} />
        
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
