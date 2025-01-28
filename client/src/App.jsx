"use client"
import { useState } from 'react'
import Home from './pages/Home'
import Cursor from './components/ui/cursor'
import Header from './components/Header'
import Features from './pages/Features'
import Benefits from './pages/Benefits'
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black'>
        {/* Hello world!!! */}
        <Header />

        <Home />
        <Features />
        <Benefits />
        <Testimonials />

        <Cursor />
      </div>
    </>
  )
}

export default App
