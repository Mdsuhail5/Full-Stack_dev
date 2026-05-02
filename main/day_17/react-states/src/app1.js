import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
    const [selectedId, setselectedId] = useState(1)
    return <div>
        <button onClick={function () { setselectedId(1); }}>1</button>
        <button onClick={function () { setselectedId(2); }}>2</button>
        <button onClick={function () { setselectedId(3); }}>3</button>
        <button onClick={function () { setselectedId(4); }}>4</button>
        <Todo id={selectedId} />
    </div>
}


function Todo(id) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/todos?id=" + id)
            .then(function (response) {
                setTodos(response.data.todos)
            })
    }, [id])

    return <div>
        ID: {id}
        <h1>{todos.title}</h1>
        <h4>{todos.description}</h4>
    </div>
}
export default App
