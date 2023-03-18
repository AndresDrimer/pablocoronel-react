import { Link } from "react-router-dom";


export default function NotFound() {
  return (
    <div className="not-found">
    <h2>Page not found!</h2>
    <p>Please go back to <strong><Link to="/">Homepage</Link></strong></p>.</div>
  )
}

