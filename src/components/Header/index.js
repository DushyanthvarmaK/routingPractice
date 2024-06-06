import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="logo-section">
      <img
        className="logo"
        alt="wave"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="logo-heading">Wave</h1>
    </div>
    <ul className="tabs-list">
      <li className="tab">
        <Link to="/">Home</Link>
      </li>
      <li className="tab">
        <Link to="/about">About</Link>
      </li>
      <li className="tab">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)
export default Header
