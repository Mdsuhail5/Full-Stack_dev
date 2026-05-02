import { useState, memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let counter = 4;
function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Wake up @5am",
    description: "Nigga wake up early @5am",
  }, {
    id: 2,
    title: "Go to gym",
    description: "Workout like hell at gym",
  }, {
    id: 3,
    title: "Get ready and go work",
    description: "Take shower, get ready and reach office on time",
  }])

  function addTodo() {
    setTodos([...todos, {
      id: counter++,
      title: Math.random(),
      description: Math.random()

    }])
  }


  return (
    <div>
      <button onClick={addTodo}>Add a todo</button>
      {todos.map((todo) => {
        return <Todo key={todo.id} title={todo.title} description={todo.description}></Todo>
      })}
    </div>
  )
}

function Todo(props) {

  return <div>
    <h1>{props.title}</h1>
    <h3>{props.description}</h3>
  </div>
}
export default App
