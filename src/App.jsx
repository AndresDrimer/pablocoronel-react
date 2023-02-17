import { useState } from 'react'
import Nav from './components/Nav'
import data from '../data.js'

import './App.css'
import VideoBackground from './components/VideoBackground'
import About from './components/About'

function App() {
  

  return (
    <div className="App">
     <Nav 
     name={data.name}
     subtitle={data.subtitle}
     sections={data.sections}
     />
     <VideoBackground />
     <About 
     aboutPhoto={data.aboutPhoto}
     logoPhoto={data.logoPhoto}
     awardsLogo={data.awardsLogo}
     aboutmeText={data.aboutmeText}
     awards={data.awards}
     />
    </div>
  )
}

export default App
