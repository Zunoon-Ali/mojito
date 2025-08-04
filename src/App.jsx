import React from 'react'
import { ScrollTrigger, SplitText } from 'gsap/all'
import gsap from 'gsap'
import Navbar from './components/Navbar'

gsap.registerPlugin(SplitText, ScrollTrigger)

function App() {
  return (
    <main>
      <Navbar />
    </main>
  )
}

export default App
