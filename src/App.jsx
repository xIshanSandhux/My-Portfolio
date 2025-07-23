import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About id="about" />
    <Contact id="contact" />
    </>
  )
}

export default App
