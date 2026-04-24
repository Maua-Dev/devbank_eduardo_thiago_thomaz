import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header"
import Home from "./pages/home";
import { Withdraw } from './pages/withdraw'

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* Show all pages*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
