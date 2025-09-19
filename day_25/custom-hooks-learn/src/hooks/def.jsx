//  What are custom hooks
// Hooks that you create yourself, so other people can use them are called custom hooks.
// A custom hook is effectively a function, but with the following properties - 
// 1. Uses another hook internally (useState, useEffect, another custom hook)
// 2. Starts with use

// A few good examples of this can be 
// Data fetching hooks
// Browser functionality related hooks - useOnlineStatus , useWindowSize, useMousePosition
// Performance/Timer based - useInterval, useDebounce

// Data fetching hooks
// Data fetching hooks can be used to encapsulate all the logic to fetch the data from your backend
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

export default App