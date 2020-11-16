import React from 'react'
import Hero from '../components/Hero'
import logo from "../images/Asset 18@0.5x.png";
import { Link } from "react-router-dom";

import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'
export default function Contact() {
    return (
        <>
        {/* <Hero hero="carsHero">
        <Banner title="Contact" subtitle="Contactez nous pour tous types de demandes">
        </Banner>
</Hero>    */}
        <section className="contact-layout">
          <div className="contact-page">
          
          <div className="left-column">
          <img src={logo} alt="" className="contact-img"/>



          <a href="mailto:contact@drive-automobiles.fr" className="btn-contact">
              contact@drive-automobiles.fr
            </a>
            <a href="tel:0123456" className="btn-contact">
              07 68 95 08 07
            </a>
            <h2>Nous trouver</h2>

<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10681.358982340967!2d-1.5845686!3d47.987821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7a411ead78b9ca4!2sDrive%20Automobiles!5e0!3m2!1sen!2sfr!4v1605447674827!5m2!1sen!2sfr" className="Google-maps"></iframe>

</div>
          <div className="right-column">
          <h2>Nous contacter</h2>


          <ContactForm />
          </div>    
          </div>
 
          </section>
</>
)
}

