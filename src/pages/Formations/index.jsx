import Collapse from "../../components/Collapse"
import { Link } from "react-router-dom"
import Nav from "../../components/Nav"
import "../../styles/Formation.scss"

export default function Formations() {
  return (
    <main className="studies-collapses">
      <Nav />
      <h2>Formations</h2>
      <Collapse
        collapseTitle="Développeur web"
        collapseSubhead={"en 2024 - alternance sur OpenClassrooms"}
        id={"collapse-1"}
      >
        <Link to="https://openclassrooms.com/fr/paths/717-developpeur-web">
          Parcours développeur web
        </Link>
        <p>
          Les missions types réalisées :
          <ul>
            <li>
              Construire un site web responsive et dynamique s’adaptant à tout
              type d’écran grâce à l’intégration des éléments des maquettes
              graphiques (développement front-end avec HTML, CSS, JavaScript et
              React).
            </li>{" "}
            <li>
              Créer des API et des bases de données pour développer des sites
              complets et dynamiques et assurer le bon fonctionnement côté
              serveur (développement back-end avec NodeJS, Express et MongoDB).
            </li>{" "}
            <li>
              Optimiser les performances et réaliser la maintenance de sites web
              déjà existants pour permettre leur fonctionnement optimal et une
              bonne visibilité sur les moteurs de recherche (SEO).
            </li>{" "}
            <li>
              Gérer un projet web de A à Z : de la planification du projet à la
              présentation de la solution au client, en passant par la rédaction
              des spécifications techniques.
            </li>
          </ul>
          Les technologies et les langages techniques maitrisées à la fin du
          parcours :
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git/GitHub</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB</li>
            <li>les API REST</li>
          </ul>
        </p>
      </Collapse>

      <Collapse
        collapseTitle="BTS Assistant de Manager"
        collapseSubhead={
          "en 2016 - Lycée Robert Doisneau de Corbeil-Essonnes (91)"
        }
        id={"collapse-2"}
      >
        <p>Dîplome obtenu avec 16/20 de moyenne générale. </p>
        <p>
          La formation est divisée entre un cursus d’enseignement général
          (Français, Anglais, Droit et économie générale et d’entreprise) et un
          cursus d’enseignement professionnel réparti en 5 enseignements :{" "}
          <ul>
            <li>
              Communication et relations professionnelles internes et externes.
            </li>
            <li>Soutien à l’information.</li>
            <li>Aide à la décision.</li>
            <li>Organisation de l’action.</li>
            <li>Prise en charge des activités déléguées.</li>
          </ul>
        </p>
      </Collapse>

      <Collapse
        collapseTitle="Certification Voltaire - Orthographe Affaires"
        collapseSubhead={
          "en 2016 - Lycée Robert Doisneau de Corbeil-Essonnes (91)"
        }
        id={"collapse-3"}
      >
        <Link to="https://www.certificat-voltaire.fr/">
          Certificat Voltaire
        </Link>
        <p>Dîplome obtenu avec un score général de 780</p>
        <p>
          le Certificat Voltaire atteste du niveau de maîtrise des règles
          d’orthographe et de grammaire. Il certifie de l'aptitude à rédiger des
          écrits professionnels sans fautes.
        </p>
      </Collapse>
    </main>
  )
}
