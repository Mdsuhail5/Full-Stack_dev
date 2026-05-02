import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ backgroundColor: "red" }}> hi </div>
                <div style={{ backgroundColor: "brown" }}> hi </div>
                <div style={{ backgroundColor: "yellow" }}> hi </div>
                <div style={{ backgroundColor: "red" }}> hi </div>
            </div><br></br>
            <div className="flex justify-between">
                <div className='bg-red-400'> hi </div>
                <div className='bg-green-400'> hi </div>
                <div className='bg-yellow-400'> hi </div>
                <div className='bg-red-400'> hi </div>
            </div><br></br>
            <div className="grid grid-cols-10">
                <div className='bg-red-400 col-span-4'> hi </div>
                <div className='bg-green-400 col-span-4'> hi </div>
                <div className='bg-yellow-400 col-span-2'> hi </div>
            </div>
            <div className="flex">
                <div className='bg-red-400 w-[40%]'> hi </div>
                <div className='bg-green-400 w-[40%]'> hi </div>
                <div className='bg-yellow-400 w-[20%]'> hi </div>
            </div>
            <br></br>
            <div className='bg-red-500 md:bg-blue-500'> hi </div>
            <br></br>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className='bg-red-400'> hi </div>
                <div className='bg-green-400 '> hi </div>
                <div className='bg-yellow-400 '> hi </div>
            </div>
        </>
    )
}

export default App
