import { useState } from 'react'
import Header from "./components/header"
import { Withdraw } from './pages/withdraw'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < Header />
      < Withdraw />
    </>
  )
};

export default App;
