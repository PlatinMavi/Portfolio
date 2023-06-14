import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./Navbar.jsx"
import Jumbotron from './Jumbotron'

function App() {
  

  return (
    <>
      
      <Navbar/>
      <Jumbotron />
      <div className="colors container bg-black h-screen p-16">
        <div className="w-96 h-96 bg-orange-600 rounded-full"></div>
      </div>
    </>
  )
}

export default App
