import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home";
import { Withdraw } from './pages/withdraw'
<<<<<<< HEAD
import { Deposit } from "./pages/deposit";
import { useState } from "react";
=======
import { History } from './pages/history'
>>>>>>> c60e32c7410b2bf138d5c327cbf6a89b8d7d9fb8

function App() {
  // Holds the balance state — starts at R$1000
  const [balance, setBalance] = useState(1000); // use all pages

  return (
<<<<<<< HEAD
    <BrowserRouter> {/* enables navigation between pages */}
      <Header /> {/* shows on every page */}
      <Routes> {/* decides which page to render based on the URL */}
        {/* "/" — Home page */}
        <Route path="/" element={<Home />} /> 
        
        {/* "/withdraw" — Withdraw page, receives balance and a function to subtract */}
        <Route path="/withdraw" element={<Withdraw balance={balance} onWithdraw={(v) => setBalance(balance - v)} />} />
        
        {/* "/deposit" — Deposit page, receives balance and a function to add */}
        <Route path="/deposit" element={<Deposit balance={balance} onDeposit={(v) => setBalance(balance + v)} />} />
=======
    <BrowserRouter>
      <Header /> {/* Show all pages*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/withdraw" element={<Withdraw />} />
        <Route path="/history" element={<History />} />
>>>>>>> c60e32c7410b2bf138d5c327cbf6a89b8d7d9fb8
      </Routes>
    </BrowserRouter>
  )
};

export default App;
