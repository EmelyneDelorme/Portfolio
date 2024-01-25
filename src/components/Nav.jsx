import "../styles/Nav.scss"
import { Link } from "react-router-dom"

function Nav() {
  return (
    <nav role="navigation" aria-label="Menu principal.">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/expériences">Expériences</Link>
        </li>
        <li>
          <Link to="/formations">Formations</Link>
        </li>
        <li>
          <Link to="/compétences">Compétences</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
