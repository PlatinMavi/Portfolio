import { useState } from 'react'

import './App.css'
import Navbar from "./Navbar.jsx"
import Jumbotron from './Jumbotron'
import Section1 from "./Section1"
import Jumbotron2 from './Jumbotron2'
import Section2 from "./Section2"
import Jumbotron3 from './Jumbotron3'
import Section3 from "./Section3"
import Jumbotron4 from './Jumbotron4'
import Section4 from "./Section4"
import Contact from "./Contact"

function App() {
  

  return (
    <>
      
      <Navbar/>
      <Jumbotron />
      <Section1 />
      <Jumbotron2 />
      <Section2/>
      <Jumbotron3/>
      <Section3/>
      <Jumbotron4/>
      <Section4/>
      <Contact/>

    </>
  )
}

export default App
