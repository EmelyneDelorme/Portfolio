import "../styles/Banner.scss"
import img from "../assets/fond.jpg"

function Banner() {
  return (
    <div className="banner">
      <div className="background">
        <img className="banner-img" src={img} alt="" />
      </div>
      <h1 className="banner-title">Émelyne DELORME</h1>
    </div>
  )
}

export default Banner
