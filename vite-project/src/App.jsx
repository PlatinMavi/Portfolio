import { useState } from 'react'

import './App.css'
import Navbar from "./Navbar.jsx"
import Jumbotron from './Jumbotron'
import Profile from "./Profile"

function App() {
  

  return (
    <>
      
      <Navbar/>
      <Jumbotron />
      <div className="container mx-auto h-screen">
        <Profile />
      </div>
      
    </>
  )
}

export default App
