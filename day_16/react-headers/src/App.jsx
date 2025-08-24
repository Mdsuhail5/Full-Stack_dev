import { useState, memo, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Todos, setTodos] = useState(0)

  useEffect(() => {
    setInterval(() => {
      fetch("")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
    }, 1000)
  }, [])

  return <div>
    {Todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
  </div>
}

function Todo({ title, description }) {
  return <div>
    <h1>
      {title}
    </h1>
    <h4>
      {description}
    </h4>
  </div>
}

export default App
