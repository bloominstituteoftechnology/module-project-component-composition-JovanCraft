import React, { useState, useEffect } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

const api_key = `DEMO_KEY`
const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`

function App() {
  useEffect(() => {

  }, [])
  return (
    <>
    <Header />
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
    <MainContent />

    <Footer />
    </>
  )
}

export default App
