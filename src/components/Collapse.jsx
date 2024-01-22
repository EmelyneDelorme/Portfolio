import { useState } from "react"
import "../styles/Collapse.scss"

function Collapse({ children, collapseTitle, collapseSubhead, id }) {
  const [isOpen, setIsOpen] = useState(false)

  // Fonction pour basculer l'état isOpen
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  const arrowClass = isOpen ? "rotate-up" : "rotate-down"

  return (
    <div className="collapse">
      <button
        className="collapse-banner"
        onClick={toggleCollapse}
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={id}
      >
        <div className="collapse-head">
          <h2>{collapseTitle}</h2>
          <p>{collapseSubhead}</p>
        </div>
        <i
          aria-hidden="true"
          className={`fas fa-chevron-down ${arrowClass}`}
        ></i>
      </button>
      {isOpen && (
        <div className="collapse-text" id={id}>
          {children}
        </div>
      )}
    </div>
  )
}

export default Collapse
