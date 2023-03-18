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

</div>
  );
}
