import Collapse from "../../components/Collapse"
import ProjectCard from "../../components/ProjectCard"
import "../../styles/Projets.scss"
import bluel from "../../assets/bluel.webp"
import booki from "../../assets/booki.PNG"
import grimoire from "../../assets/grimoire.webp"
import kasa from "../../assets/kasa.PNG"

export default function Projets() {
  return (
    <main className="projects-page">
      <h2>Projets</h2>
      <div className="project">
        <ProjectCard
          key="1"
          id="1"
          cover={booki}
          title="HTML CSS"
          page="https://github.com/EmelyneDelorme/Delorme_Emelyne_1_code_08022023"
        />
        <Collapse
          aria-label="Description du projet HTML CSS"
          collapseSubhead="Description"
          id={"collapse-1"}
        >
          <p>
            But du projet : Intégrer du contenu conformément à une maquette avec
            HTML et CSS. Projet responsive, from scratch.
          </p>
          <p>
            Le projet m'a permis d'entrer dans le monde du développement web.
            J'ai pû découvrir les bases HTML CSS. Pouvoir visualiser le résultat
            de mon mon travail était très motivant.
          </p>
          <p>
            La principale difficulté a été de comprendre comment fonctionne le
            versionning avec Git et GitHub. Je me suis entraînée et j'ai cherché
            des informations pour faire des commits plus clairs et plus précis.
            Depuis, j'utilise Conventional commits.
          </p>
        </Collapse>
      </div>
      <div className="project">
        <ProjectCard
          key="2"
          id="2"
          cover={bluel}
          title="Javascript"
          page="https://github.com/EmelyneDelorme/Delorme_Emelyne_1_code_20032023"
        />
        <Collapse
          aria-label="Description du projet Javascript"
          collapseSubhead="Description"
          id={"collapse-2"}
        >
          <p>But du projet : Rendre dynamique une page web.</p>
          <p>
            Le projet m'a permis de découvrir et d'apprendre les bases de
            Javascript. La base de travail (version statique du site) était déjà
            faite. J'ai dû ajouter des fonctionnalités en Javascript telles que
            :
            <ul>
              <li>Récupération de données via une API.</li>
              <li>Création d'une fonctionnalité de tri de données.</li>
              <li>Création d'une modale.</li>
              <li>Création de la fonctionnalité d'ajout de données.</li>
            </ul>
          </p>
          <p>
            Il existe énormément de fonctions Javascript. J'ai dû chercher et
            apprendre à utiliser les fonctions qui me permettaient de réaliser
            les fonctionnalités demandées le plus efficacement possible. J'ai
            également fait beaucoup de coding games pour m'entraîner à
            comprendre et maitriser les fonctions.
          </p>
        </Collapse>
      </div>
      <div className="project">
        <ProjectCard
          key="3"
          id="3"
          cover={kasa}
          title="React"
          page="https://github.com/EmelyneDelorme/delorme_emelyne_1_code_032023"
        />
        <Collapse
          aria-label="Description du projet React"
          collapseSubhead="Description"
          id={"collapse-3"}
        >
          <p>
            But du projet : Création d'un projet React avec Create React App.
          </p>
          <p>
            Le projet m'a permis de découvrir les bases de React. J'ai dû créer
            des composants, les imbriquer, les styliser, les rendre responsive.
          </p>
          <p>
            La principale difficulté a été de comprendre comment fonctionne les
            props et les states. J'ai dû chercher des informations et faire des
            exercices pour comprendre et maitriser ces notions.
          </p>
        </Collapse>
      </div>
      <div className="project">
        <ProjectCard
          key="4"
          id="4"
          cover={grimoire}
          title="Express MongoDB"
          page="https://github.com/EmelyneDelorme/delorme_emelyne_1_code_112023"
        />
        <Collapse
          aria-label="Description du projet Express MongoDB"
          collapseSubhead="Description"
          id={"collapse-4"}
        >
          <p>But du projet : Création du backend d'un site.</p>
          <p>
            Le projet m'a permis de découvrir les bases de React. Créez un
            serveur Express simple, une API RESTful et une base de données
            MongoDB. J'ai dû mettre en place un système d'authentification,
            créer des routes sécurisées et stocker des données utilisateur dans
            une base de données MongoDB.
          </p>
          <p>
            La principale difficulté a été de comprendre le code frontend fourni
            et faire en sorte que le backend que j'ai créé fonctionne
            correctement avec. J'ai dû effectuer des tests pour vérifier que mon
            backend renvoyait les bonnes données au frontend.
          </p>
        </Collapse>
      </div>
    </main>
  )
}
