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
import bannerImg from './assets/undraw_feeling_happy_jymo 1.png'
import Banner from './shared/Banner'
import Footer from './components/Footer'

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
      <div className='md:px-14 px-4 max-w-screen-2xl mx-auto'>
      <Banner heading='Each student an share their discount code for friends' subHeading='A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.' banner={bannerImg} btn1="I have a code" btn2="Discount" />
      </div>
      <Footer />
    </>
  )
}

export default App
