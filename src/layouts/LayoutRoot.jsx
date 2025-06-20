import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";



export default function LayoutRoot(props) {
  return (
    
    <div className="layout-root">
    <header>
      <Nav name={props.data.name} subtitle={props.data.subtitle} sections={props.data.sections} />
    </header>

    <Outlet />

    <Footer
    name={props.data.name}
    subtitle={props.data.subtitle}
    contactInfo={props.data.contactInfo}
  />
  
<div id="firmaCont"> <p id="firma">PABLO CORONEL © <a href="https://adrimer.com.ar/" target="_blank"
        rel="noopener noreferrer" aria-label="ir a página desarrollador">Built by A. Drimer</a></p></div>
</div>
  );
}
