import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div>
      <Card
        name="Lokeshwar"
        description="A TA in 100xdev cohort2"
        interests={["Ionic", "OpenSource", "Appdev"]}
      />
      <Card
        name="Your Name"
        description="Full Stack Developer"
        interests={["React", "Node.js", "MongoDB"]}
      />
    </div>
  )
}


function Card({ name, description, interests }) {
  return <div style={{
    backgroundColor: 'white',
    margin: 20,
    border: "1px #e0e0e0 solid",
    borderRadius: '0.75rem',
    padding: 20,
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px'
  }}>
    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{name}</h1>
    <p style={{ fontSize: '1.1rem', color: "#666666", marginBottom: '1rem' }}>{description}</p>
    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Interests</h3>
    {interests.map(function (interest, index) {
      return <p key={index} style={{ color: "#666666", margin: '0.25rem 0' }}>{interest}</p>
    })}

    <button style={{
      backgroundColor: "#1e90ff",
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      margin: '5px',
      cursor: 'pointer'
    }}>LinkedIn</button>
    <button style={{
      backgroundColor: "#1e90ff",
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      borderRadius: '5px',
      margin: '5px',
      cursor: 'pointer'
    }}>Twitter</button>
  </div>

}


export default App
