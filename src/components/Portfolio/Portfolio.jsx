import { Routes, Route } from 'react-router-dom'
import PortfolioAllProjects from '../Portfolio/PortfolioAllProjects'
import PortfolioEachTrailer from '../../layouts/LayoutPortfolioEachTrailer'


export default function Portfolio(props){
  
 
  
  
  return(<>
    <h2 className="--portfolio-title" id="portfolio"> PORTFOLIO</h2>
    <Routes>
      <Route index element={<PortfolioAllProjects portfolio={props.portfolio}/>}></Route>
      <Route path=":id" element={<PortfolioEachTrailer portfolio={props.portfolio} />}></Route>
    </Routes>

   
      
      </>
  )
}