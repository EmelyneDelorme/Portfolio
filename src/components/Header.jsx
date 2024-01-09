import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import "../styles/Header.scss"

function Header() {
  return (
    <header>
      <nav>
        <ul className="header-nav">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
