import data from "../data.js";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

/*components*/
import EachWorks from "./components/Works/EachWork";
import PortfolioEachTrailer from "./components/Portfolio/PortfolioEachTrailer";

/* layouts*/
import LayoutRoot from "./layouts/LayoutRoot/LayoutRoot";

/*pages*/
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayoutRoot data={data} />}>
        <Route index element={<Home data={data} />} />
        <Route
          path="portfolio/:id"
          element={<PortfolioEachTrailer portfolio={data.portfolio} />}
        />
        <Route path="works/:id" element={<EachWorks works={data.works} />} />

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
