import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header title="Aryan"></Header>
      <Header title="rayan"></Header>
    </div>
  )
}

function Header(props) {
  return <div>
    {props.title}
  </div>

}
export default App
