import { Link } from "react-router-dom"
import "../styles/PageCard.scss"

function ProjectCard({ page, cover, title, target }) {
  return (
    <li className="page-card">
      <Link to={page} target="_blank">
        <img src={cover} alt="" />
        <h3>{title}</h3>
      </Link>
    </li>
  )
}

export default ProjectCard
