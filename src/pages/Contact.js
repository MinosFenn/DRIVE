import React from "react";
import Hero from "../components/Hero";
import logo from "../images/Asset 18@0.5x.png";
import { Link } from "react-router-dom";

import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* <Hero hero="carsHero">
        <Banner title="Contact" subtitle="Contactez nous pour tous types de demandes">
        </Banner>
</Hero>    */}
      <section className="contact-layout">
        <div className="contact-page">
          <div data-aos="slide-right" className="left-column">
            <img src={logo} alt="" className="contact-img" />

            <a
              href="mailto:matteo@drive-automobiles.fr"
              className="btn-contact"
            >
              matteo@drive-automobiles.fr
            </a>

            <h2>Nous trouver</h2>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10681.358982340967!2d-1.5845686!3d47.987821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7a411ead78b9ca4!2sDrive%20Automobiles!5e0!3m2!1sen!2sfr!4v1605447674827!5m2!1sen!2sfr"
              className="Google-maps"
            ></iframe>
          </div>
          <div data-aos="slide-left" className="right-column">
            <h2>Nous contacter</h2>

            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

// <div className="form">
//          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
//   {/* You still need to add the hidden input with the form name to your JSX form */}
//   <input type="hidden" name="form-name" value="contact" />
//   <p>
//     <label>Votre Nom et Prénom <br></br><input required type="text" name="name" /></label>
//   </p>
//   <p>
//     <label>Votre Email: <br></br><input required type="email" name="email" /></label>
//   </p>
//   <p>
//     <label>Votre N° de Téléphone: <br></br><input required type="tel" name="tel" /></label>
//   </p>
//   <p>
//     <label for="requete">Votre demande concerne <br></br>
//     <select name="requete">
//       <option value="depot">Dépôt</option>
//       <option value="vente">Vente</option>
//       <option value="achat">Achat</option>
//       <option value="commande">Commande</option>
//       <option value="autre">Autre</option>

//     </select></label>
//   </p>
//   <p>
//     <label>Message: <br></br><textarea required rows="15" name="message"></textarea></label>
//   </p>
//   <div data-netlify-recaptcha="true"></div>
// <p>
//     <button type="submit" className="submit-btn" >Envoyer</button>
//     </p>
// </form>
//         </div>
