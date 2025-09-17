import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import axios from 'axios';
import { response } from 'express';

function useTodos() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("url")
      .then(response => {
        setTodos(response.data);
        setLoading(false)
      })
  }, [])
  return todos;
}

function App() {
  const [todos, loading] = useTodos();

  if (loading) {
    return <div>loading...</div>
  }
  return (
    <>
      {todo.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br></br>
    {todo.description}
  </div>
}
export default App
