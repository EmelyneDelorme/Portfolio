import Collapse from "../../components/Collapse"
import Nav from "../../components/Nav"
import "../../styles/Competences.scss"

export default function Competences() {
  return (
    <main className="skills">
      <Nav />
      <h2>Compétences</h2>
      <div className="skills-step">
        <h3>Accessibilité numérique</h3>
        <Collapse
          collapseSubhead="Création et correction de documents accessibles"
          id={"collapse-1"}
        >
          <ul>
            <li>Word.</li>
            <li>Excel.</li>
            <li>PowerPoint.</li>
            <li>PDF.</li>
            <li>Mails</li>
            <li>InDesign</li>
          </ul>
        </Collapse>
        <Collapse
          collapseSubhead="Accompagnement dans la création de projets accessibles"
          id={"collapse-2"}
        >
          <ul>
            <li>
              Création et animation de formations sur l'accessibilité numérique
              pour des UX/UI et webmasters.
            </li>
            <li>
              Création et animation de sensibilisations sur l'accessibilité
              numérique.
            </li>
            <li>
              Aide au développement accessible grâce à des annotations sur des
              maquettes (Figma).
            </li>
          </ul>
        </Collapse>
        <Collapse
          collapseSubhead="Initiation aux audits de conformité RGAA"
          id={"collapse-3"}
        >
          <ul>
            <li>Réalisation de tests.</li>
            <li>Corrections d'anomalies.</li>
            <li>Déclaration de déclarations d'accessibilité.</li>
          </ul>
        </Collapse>
      </div>
      <div className="skills-step">
        <h3>Développement web</h3>
        <Collapse
          collapseSubhead="Intégration web avec avec HTML CSS"
          id={"collapse-4"}
        >
          <ul>
            <li>
              Intégrer du contenu conformément à une maquette avec HTML et CSS.
            </li>
            <li>Implémenter une interface responsive avec HTML et CSS.</li>
          </ul>
        </Collapse>
        <Collapse
          collapseSubhead="Développement front-end avec Javascript"
          id={"collapse-5"}
        >
          <ul>
            <li>Manipuler les éléments du DOM avec JavaScript.</li>
            <li>Récupérer les données utilisateurs via des formulaires.</li>
            <li>Gérer les événements utilisateurs avec JavaScript.</li>
          </ul>
        </Collapse>
        <Collapse collapseSubhead="React" id={"collapse-6"}>
          <ul>
            <li>Initialiser une application avec Create React App.</li>
            <li>
              Configurer la navigation entre les pages de l'application avec
              React Router.
            </li>
            <li>
              Développer des éléments de l'interface d'un site web grâce à des
              composants React.
            </li>
          </ul>
        </Collapse>

        <Collapse
          collapseSubhead="Administration via un back office"
          id={"collapse-8"}
        >
          <p>Strapi</p>
        </Collapse>
        <Collapse collapseSubhead="Optimisation et débug" id={"collapse-9"}>
          <ul>
            <li>Optimiser les performances d’un site web.</li>
            <li>Débugger un site web grâce aux Chrome DevTools.</li>
            <li>Rédiger un cahier de recette pour tester un site.</li>
          </ul>
        </Collapse>
        <Collapse
          collapseSubhead="Gestion de projet et outils de développeurs"
          id={"collapse-10"}
        >
          <ul>
            <li>
              Suivre le déroulement du projet grâce à un outil de gestion de
              projet.
            </li>
            <li>
              Rédiger les spécifications techniques d'un projet web à partir de
              besoins fonctionnels.
            </li>
            <li>
              Découper une fonctionnalités en tâches pour préparer le
              développement.
            </li>
            <li>Versionner son projet avec Git et Github.</li>
            <li>
              Découper une fonctionnalités en tâches pour préparer le
              développement.
            </li>
          </ul>
        </Collapse>
        <Collapse
          collapseSubhead="Développement back-end avec Node JS"
          id={"collapse-11"}
        >
          <ul>
            <li>
              Implémenter un modèle logique de données conformément à la
              réglementation.
            </li>
            <li>Mettre en œuvre des opérations CRUD de manière sécurisée.</li>
            <li>Stocker des données de manière sécurisée.</li>
          </ul>
        </Collapse>
      </div>
    </main>
  )
}
