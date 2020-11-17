import React, { Component } from 'react'
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import logo from "../images/Asset 18@0.5x.png";

export default class Footer extends Component {
    render() {
        return (
            <section className="footer">
            <div clasNames="row-footer">
  <div className="column-footer">
  <img src={logo} alt="" className="contact-img-footer"/>

    <p>Boulevard Francois Mittérand, Z.A.C Des Grands Sillons, LOT 5, 35150, Corps-Nuds, France</p>
  </div>
  <div className="column-footer">
    <h2>Réseaux sociaux</h2>
    <span><FaLinkedin /></span>
    <span><FaFacebook /></span>
    <span><FaInstagram /></span>

    <p>Suivez nous sur les réseaux !</p>
  </div>
  <div className="column-footer">
    <h2>Nos horaires</h2>
    <p><b>LUN</b>,
    <b>MAR</b>,
    <b>MER</b>,
    <b>JEU</b>,
    <b>VEN</b>: 09:00 - 17:30</p><br></br>
    <p><b>SAM</b>:	09:00 - 17:30</p><br></br>
    <p><b>DIM</b>:	Fermé</p><br></br>

  </div>

</div>
  <div className="bottom-footer"><p>2020 - DRIVE - SIRET:XXXXXXXXXXXXXXX | CGU & COOKIES</p> </div>

            </section>
        )
    }
}
