import { BrowserRouter, Routes, Route } from "react-router-dom"; // routing
import Header from "./components/header"   // shown on every page
import Home from "./pages/home";           // "/" 
import Account from "./pages/account";
import { Withdraw } from './pages/withdraw' // "/withdraw"
import { Deposit } from "./pages/deposit"; // "/deposit"
import { History } from './pages/history'  // "/history"

// sets BASE_URL in api.ts before any component loads
// all API calls (getAccount, postTransaction, getTransactions) depend on this
// URL comes from .env file (VITE_API_URL)
// TODO: when input field is ready in home.tsx, remove this line

function App() {
  return (
    <BrowserRouter> {/* enables navigation between pages */}
      <Header /> {/* shows on every page — fetches name, agency and account from API */}
      <Routes> {/* decides which page to render based on the URL */}
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/account" element={<Account />} />   {/* Account page */}
        <Route path="/withdraw" element={<Withdraw />} /> {/* fetches balance and sends withdraw to API */}
        <Route path="/deposit" element={<Deposit />} />   {/* fetches balance and sends deposit to API */}
        <Route path="/history" element={<History />} />   {/* fetches transaction list from API — needs backend */}
      </Routes>
    </BrowserRouter>
  )
};

export default App;