import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [bank, setBank] = useState({})
  const [exchange, setExchange] = useState({})
  console.log("this is rendering")
  useEffect(() => {
    setTimeout(() => {
      setBank({ income: 100 });
    }, 3000);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExchange({ returns: 100 })
    }, 1000)
  }, [])
  const incomeTax = (bank.income + exchange.returns) * 0.3
  return (
    <div>
      <h1>
        hi there, your income tax returns are {incomeTax}
      </h1>
    </div>
  )
}

export default App
