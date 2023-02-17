import { useState } from 'react'
import Nav from './components/Nav'
import data from '../data.js'

import './App.css'
import VideoBackground from './components/VideoBackground'
import About from './components/About'
import Works from './components/Works'

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
     <Works 
     works={data.works}
     otherWorks={data.otherWorks}
     />
    </div>
  )
}

export default App
