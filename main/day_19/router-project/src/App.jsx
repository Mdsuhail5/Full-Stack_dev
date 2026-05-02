
import './App.css'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Suspense, lazy } from 'react'

// for lazy loading -> when the button is clicked then only that js page is req and get
const Dashboard = lazy(() => import('./components/Dashboard'))
const Landing = lazy(() => import('./components/Landing'))

// for client site routing
//import { Dashboard } from './components/Dashboard'
//import { Landing } from './components/Landing'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
          <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Appbar() {
  const navigate = useNavigate();
  return <div>
    <div>
      <button onClick={() => { navigate('/') }}>Landing</button>
      <button onClick={() => { navigate("/dashboard") }}>Dashboard</button>
    </div>
  </div>
}
export default App
