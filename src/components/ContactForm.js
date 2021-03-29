import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactForm = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos="fade-up" className="form">
      <form
        name="contact"
        method="post"
        action="/contact"
        onSubmit="submit"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Votre Nom et Prénom <br></br>
            <input required type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Votre Email: <br></br>
            <input required type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Votre N° de Téléphone: <br></br>
            <input required type="tel" name="tel" />
          </label>
        </p>
        <p>
          <label for="requete">
            Votre demande concerne <br></br>
            <select name="requete">
              <option value="depot">Dépôt</option>
              <option value="vente">Vente</option>
              <option value="achat">Achat</option>
              <option value="commande">Commande</option>
              <option value="autre">Autre</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <br></br>
            <textarea required rows="15" name="message"></textarea>
          </label>
        </p>
        <div data-netlify-recaptcha="true"></div>
        <p>
          <button type="submit" className="submit-btn">
            Envoyer
          </button>
        </p>
      </form>
    </div>
  );
};
export default ContactForm;
