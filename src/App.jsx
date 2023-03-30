import data from "../data.js";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  useLocation
} from "react-router-dom";
import "./App.css";

/*components*/

/* layouts*/
import LayoutRoot from "./layouts/LayoutRoot";
import PortfolioEachTrailer from "./layouts/LayoutPortfolioEachTrailer";
import WorkEach from './layouts/LayoutWorkEach'

/*pages*/
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ScrollToTop from './components/ScrollToTop.jsx'



export default function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
     
      <Route path="/*" element={<LayoutRoot data={data} />}>  
        <Route index element={<Home data={data} />} 
        />
       
        <Route
          path="portfolio/:id"
          element={<PortfolioEachTrailer portfolio={data.portfolio} 
          />}
        />
        <Route path="works/:id" element={<WorkEach works={data.works} />} 
        />
         
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}
