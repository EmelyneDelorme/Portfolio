import Banner from "../../components/Banner"

export default function Projets() {
  return (
    <main className="container-contact-us-form">
      <Banner />
      <p className="h1">CONTACT</p>
      <form className="contact-us-form">
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Nom"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Adresse e-mail</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Adresse e-mail"
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
    </main>
  )
}
