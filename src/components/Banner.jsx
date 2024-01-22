import "../styles/Banner.scss"
import { Link } from "react-router-dom"
import img from "../assets/fond.jpg"

function Banner() {
  return (
    <header>
      <Link to="/" className="banner">
        <div className="background">
          <img className="banner-img" src={img} alt="" />
        </div>
        <h1 className="banner-title">
          Émelyne DELORME{" "}
          <span className="banner-title-bis">
            Consultante en accessibilité numérique
          </span>
          <span className="banner-title-bis">Développeuse web</span>
        </h1>
      </Link>
    </header>
  )
}

export default Banner
