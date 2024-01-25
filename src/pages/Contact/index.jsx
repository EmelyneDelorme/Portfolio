import Nav from "../../components/Nav"
import "../../styles/Contact.scss"

export default function Contact() {
  return (
    <main className="container-contact-us-form">
      <Nav />
      <h2>CONTACT</h2>
      <p>
        Vous souhaitez me contacter ? Utilisez le formulaire ci-après pour
        m'envoyer un message !
      </p>
      <p>
        Les champs marqués d'un astérique <span aria-hidden="true">(*)</span>
        sont obligatoires
      </p>
      <form className="contact-us-form">
        <div className="form-group">
          <label className="label" htmlFor="name">
            Nom* :<span className="helper-text">exemple: Émelyne Delorme</span>
            {/* {invalidName && (
              <span className="error">Le champ nom est obligatoire</span>
            )} */}
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nom"
            required="true"
            autoComplete="name"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="company">
            Entreprise :<span className="helper-text">exemple: AKKODIS</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Entreprise"
            autoComplete="organization"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="subject">
            Sujet* :{" "}
            <span className="helper-text">
              Saisissez ici le sujet de votre message.
            </span>
            {/* {invalidSubject && (
              <span className="error">Le champ sujet est obligatoire</span>
            )} */}
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            placeholder="Sujet"
            required="true"
          />
        </div>
        <div className="form-group">
          <label className="label" htmlFor="message">
            Message* :{" "}
            {/* {invalidMessage && (
              <span className="error">Le champs message est obligatoire</span>
            )} */}
          </label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Message"
            required="true"
          ></textarea>
        </div>
        <button type="submit" className="btn">
          Envoyer le message
        </button>
      </form>
    </main>
  )
}
