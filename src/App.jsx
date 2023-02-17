import { useState } from 'react'
import Nav from './components/Nav'
import data from '../data.js'

import './App.css'

function App() {
  

  return (
    <div className="App">
     <Nav 
     name={data.name}
     subtitle={data.subtitle}
     sections={data.sections}
     />
    </div>
  )
}

export default App
