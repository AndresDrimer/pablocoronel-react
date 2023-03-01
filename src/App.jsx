import { useState } from "react";
import Nav from "./components/Nav";
import data from "../data.js";

import "./App.css";
import VideoBackground from "./components/VideoBackground";
import About from "./components/About";
import Works from "./components/Works";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from './components/Portfolio'

function App() {
  
  return (
    <div className="App">
      <Nav 
      name={data.name} 
      subtitle={data.subtitle} 
      sections={data.sections} />
      <VideoBackground />
      
      <About
        aboutPhoto={data.aboutPhoto}
        logoPhoto={data.logoPhoto}
        awardsLogo={data.awardsLogo}
        aboutmeText={data.aboutmeText}
        awards={data.awards}
      /> 
   
      
      <Services
        title={data.services.title}
        finalText={data.services.finalText}
        eachService={data.services.eachService}
      />
      <Works works={data.works} otherWorks={data.otherWorks} />
     
      <Portfolio 
      otherWorks={data.otherWorks} />
      <Contact contactInfo={data.contactInfo} />
      <Footer
        name={data.name}
        subtitle={data.subtitle}
        contactInfo={data.contactInfo}
      />
    </div>
  );
}

export default App;
