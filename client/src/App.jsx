import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/students/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>

    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>

   </div>
  )
}

export default App
