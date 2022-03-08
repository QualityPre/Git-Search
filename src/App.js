import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

//components
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main>Main Content here</main>
      </div>
    </Router>
  )
}

export default App
