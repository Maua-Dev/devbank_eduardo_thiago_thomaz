import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home";
import { Withdraw } from './pages/withdraw'
import { Deposit } from "./pages/deposit";
import { History } from './pages/history'

function App() {

  return (
    <BrowserRouter> {/* enables navigation between pages */}
      <Header /> {/* shows on every page */}
      <Routes> {/* decides which page to render based on the URL */}
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/withdraw" element={<Withdraw />} /> {/* Withdraw page */}
        <Route path="/deposit" element={<Deposit  />} /> {/* Deposit page */}
        <Route path="/history" element={<History />} /> {/* History page */}
      </Routes>
    </BrowserRouter>
  )
};

export default App;