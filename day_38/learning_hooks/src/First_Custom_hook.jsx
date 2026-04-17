import { useState, useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function useTodos() {
    const [Todos, setTodos] = useState([])
    const [loading, setloading] = useState(true)


    useEffect(() => {
        const value = setInterval(() => {
            axios.get("http://100xdev.com")
                .then(res => {
                    setTodos(res.data.Todos);
                    setloading(false)
                })
        }, n * 1000)

        axios.get("http://100xdev.com")
            .then(res => {
                setTodos(res.data.Todos);
                setloading(false)
            })
        return () => {
            clearInterval(value);
        }
    }, [n])
    return { Todos, loading };
}

function App() {
    const [Todos, loading] = useTodos();

    if (loading) {
        return (<div>
            loading...
        </div>)
    }

    return (
        <div>
            {Todos.map(Todos => <Todo todo={Todos} />)}
        </div>
    )
}


function Todo({ todo }) {

    return <div>
        <div>
            {todo.title}
            <br />
            {todo.description}
        </div>
    </div>

}

export default App
