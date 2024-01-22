import React, { useEffect } from "react"
import Collapse from "../../components/Collapse"
import "../../styles/Experiences.scss"

function Experiences() {
  useEffect(() => {
    document.title = "Expériences - Émelyne DELORME"
  }, [])

  return (
    <main>
      <h2>Expériences</h2>
      <section className="about-collapses">
        <Collapse
          collapseTitle="Développeuse web & Consultante en accessibilité numérique"
          collapseSubhead={"Alternance d'un an en 2023"}
          id={"collapse-1"}
        >
          <p>AKKODIS à La Défense</p>
          <ul>
            <li>
              Création de composants (Next, SASS, Typescript, Strapi)
              accessibles et administrables via un backoffice.
            </li>
            <li>
              Réalisation d’audit en interne et pour les clients : réalisation
              des tests et vérification des critères du RGAA, correction des
              non‑conformités, explication des non‑conformités, rédaction des
              déclarations d’accessibilité.
            </li>
            <li>
              Création des supports et animation de formations sur
              l’accessibilité numérique en interne et auprès de clients
            </li>
            <li>
              Mise en accessibilité de documents divers (Word, PDF, PowerPoint,
              Excel, etc.).
            </li>
            <li>
              Aide au développement accessible grâce à des annotations sur les
              maquettes Figma (utilisation de tags existants + de ma propre
              bibliothéque de tags.).
            </li>
          </ul>
        </Collapse>

        <Collapse
          collapseTitle="Assistante de direction"
          collapseSubhead={"CDI de 2017 à 2022"}
          id={"collapse-2"}
        >
          <p>ASM13 - MAS ISA13 à Soisy-Sur-Seine</p>
          <ul>
            <li>
              Organisation des temps de présence des résidents, anticipation du
              taux d’occupation : définition du planning d’une trentaine de
              résidents temporaires sur l’année (7 places hebdomadaires) et
              restriction des jours de sorties des résidents permanents afin de
              garantir un taux d’occupation minimum sur l’année.
            </li>
            <li>
              Facturations : Saisie des présences des résidents dans les
              différents supports pour les deux types de facturations.
            </li>
            <li>
              Suivi des dossiers et des dates de fin de validité des documents
              officiels : anticipation des demandes aux différents organismes
              (Maison départementale des personnes handicapées, Sécurité
              sociale, mutuelles, etc.) en collaboration avec les tuteurs
              légaux.
            </li>
            <li>Participation aux réunions et rédaction des comptes‑rendus.</li>
            <li>Vérification des fiches d’heures des salariés.</li>
            <li>
              Pendant la période COVID, aide à la constitution des plannings des
              salariés et vacataires, préparation des kits COVID (masques,
              tenues, etc.).
            </li>
          </ul>
        </Collapse>

        <Collapse
          collapseTitle="Assistante DDV Alimentaire"
          collapseSubhead={"Intérim de deux mois en 2017"}
          id={"collapse-3"}
        >
          <p>Siège Interdis - Carrefour à Massy</p>
          <p>Création, validation, ouverture des ventes sur les logiciels.</p>
        </Collapse>

        <Collapse
          collapseTitle="Assistante ADV"
          collapseSubhead={"Stage d'un mois en 2016"}
          id={"collapse-4"}
        >
          <p>Précisium Groupe à Sainte Geneviève des Bois</p>
          <p>
            Saisie des commandes AS/400, Gestion du SAV, des retours SAV et des
            avoirs clients, Gestion des états des stocks et commandes
            fournisseurs.
          </p>
        </Collapse>

        <Collapse
          collapseTitle="Assistante de Production"
          collapseSubhead={"Stage d'un mois en 2015"}
          id={"collapse-5"}
        >
          <p>LittleBigRoad à Saint-Michel-Sur-Orge</p>
          <p>
            Création de books de voyage sur InDesign et Illustrator et mise à
            jour de bases de données.
          </p>
        </Collapse>
      </section>
    </main>
  )
}

export default Experiences
