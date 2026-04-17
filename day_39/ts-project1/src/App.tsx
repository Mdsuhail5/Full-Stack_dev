import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Todos title='Go to gym' description='legs workout @8pm' done={false} />

    </>
  )
}

interface Todoprops {
  title: string,
  description: string,
  done: boolean
}


function Todos(props: Todoprops) {
  return <div>
    <h1>
      {props.title}
    </h1>
    <h2>
      {props.description}
    </h2>
  </div>

}
export default App
