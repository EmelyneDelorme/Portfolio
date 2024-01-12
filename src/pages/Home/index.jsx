import React, { useEffect } from "react"
import Banner from "../../components/Banner"
import PageCard from "../../components/PageCard"
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
      page: "expériences",
    },
    {
      id: 2,
      title: "Formations",
      cover: study,
      page: "formations",
    },
    {
      id: 3,
      title: "Compétences",
      cover: skill,
      page: "compétences",
    },
    {
      id: 4,
      title: "Projets",
      cover: project,
      page: "projets",
    },
    {
      id: 6,
      title: "Formulaire de contact",
      cover: contact,
      page: "contact",
    },
    {
      id: 5,
      title: "Télécharger le CV (PDF)",
      cover: resume,
      page: "",
    },
  ]

  return (
    <main>
      <Banner />
      <ul className="pages-list">
        {sections.map(({ id, cover, title, page }) => (
          <PageCard key={id} id={id} cover={cover} title={title} page={page} />
        ))}
      </ul>
    </main>
  )
}

export default Home
