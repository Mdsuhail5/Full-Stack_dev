import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState(
    "My name is harkirat"
  )

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update the title</button>
      <Header title={title}></Header>
      <Header title="rayan"></Header>
      <Header title="rayan"></Header>
      <Header title="rayan"></Header>
      <Header title="rayan"></Header>
      <Header title="rayan"></Header>

    </div>
  )
}

const Header = memo(function (props) {
  return <div>
    {props.title}
  </div>
})

export default App
