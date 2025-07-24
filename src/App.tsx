import { useState } from 'react'
import { motion } from 'framer-motion'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import QRShowcase from './components/QRShowcase'
import DemoTestimonial from './components/DemoTestimonial'
import CTAFooter from './components/CTAFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <QRShowcase />
        <DemoTestimonial />
      </main>
      <CTAFooter />
    </div>
  )
}

export default App
