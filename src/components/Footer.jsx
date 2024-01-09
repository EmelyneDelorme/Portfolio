import { Link } from "react-router-dom"
import "../styles/Footer.scss"

function Footer() {
  return (
    <footer>
      <ul>
        <li>Émelyne DELORME</li>
        <li>
          <Link to="tel:+33783391212">07.83.39.12.12</Link>
        </li>
        <li>
          <Link to="mailto:emelyne.delorme@gmail.com">
            emelyne.delorme@gmail.com
          </Link>
        </li>
        <li>
          <Link
            target="blank"
            to="https://maps.app.goo.gl/LZAtKBKxMUp9zCCb9"
            aria-label="Nouvel onglet: Google Maps"
          >
            Dammarie-Lès-Lys 77190
          </Link>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
