import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import Footer from './Footer'

function App() {
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
