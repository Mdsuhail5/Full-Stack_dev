import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/todos")
            .then(function (response) {
                setTodos(response.data.todos)
            })
    }, [])

    return (
        <div>
            {todos.map(todo => <Todo key={todo._id} title={todo.title} description={todo.description} />)}
        </div>
    )
}


function Todo({ title, description }) {
    return <div>
        <h1>{title}</h1>
        <p>{description}</p>
    </div>
}
export default App
