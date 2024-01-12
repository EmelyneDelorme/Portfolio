import { Link } from "react-router-dom"
import "../styles/PageCard.scss"

function PageCard({ page, cover, title }) {
  return (
    <li className="page-card">
      <Link to={page}>
        <img src={cover} alt="" />
        <h2>{title}</h2>
      </Link>
    </li>
  )
}

export default PageCard
