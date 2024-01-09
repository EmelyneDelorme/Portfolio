import React, { useEffect } from "react"
import Banner from "../../components/Banner"
import AdCard from "../../components/AdCard"
import img from "../../assets/fond.jpg"
import study from "../../assets/study.png"
import work from "../../assets/work.png"
import skill from "../../assets/skill.png"
import project from "../../assets/project.png"
import resume from "../../assets/resume.png"
import contact from "../../assets/contact.png"
import "../../styles/Home.scss"

function Home() {
  useEffect(() => {
    document.title = "Portfolio - Émelyne DELORME"
  }, [])

  const sections = [
    {
      id: 1,
      title: "Expériences",
      cover: work,
    },
    {
      id: 2,
      title: "Formations",
      cover: study,
    },
    {
      id: 3,
      title: "Compétences",
      cover: skill,
    },
    {
      id: 4,
      title: "Projets",
      cover: project,
    },
    {
      id: 6,
      title: "Formulaire de contact",
      cover: contact,
    },
    {
      id: 5,
      title: "Télécharger le CV (PDF)",
      cover: resume,
    },
  ]

  return (
    <main>
      <Banner />
      <ul className="ads-list">
        {sections.map(({ id, cover, title }) => (
          <AdCard key={id} id={id} cover={cover} title={title} />
        ))}
      </ul>
    </main>
  )
}

export default Home
