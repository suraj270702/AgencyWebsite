import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Features from './components/Features'
import About from './components/About'
import About1 from './components/About1'
import Plans from './components/Plans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Features />
      <About />
      <About1 />
      <Plans />
    </>
  )
}

export default App
