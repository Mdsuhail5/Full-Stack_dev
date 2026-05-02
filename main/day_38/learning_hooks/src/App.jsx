import { useState, useEffect } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function useOnline() {
  const [online, setonline] = useState(window.navigator.onLine)

  useEffect(() => {
    window.addEventListener('online', () => setonline(true));
    window.addEventListener('offline', () => setonline(false));

  }, [])

  return online;
}

function App() {
  const isonline = useOnline();
  return (
    <div>
      {isonline ? "You are online yay!" : "You are not online"}
    </div>
  )
}




export default App
