import React, { Component } from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

import logo from "../images/Asset 18@0.5x.png";

export default class Footer extends Component {
  render() {
    return (
      <section className="footer">
        <div clasNames="row-footer">
          <div className="column-footer">
            <img src={logo} alt="" className="contact-img-footer" />

            <p>
              38 Boulevard François Mitterrand, Les Grands Sillons, 35150
              Corps-Nuds
            </p>
          </div>
          <div className="column-footer">
            <h2>Réseaux sociaux</h2>
            <span>
              <a
                href="https://www.facebook.com/DRIVE-Automobiles-102979778436253/"
                className="social-links flame-hover"
                target="_blank"
              >
                {" "}
                <FaLinkedin LinkTo="https://www.facebook.com/DRIVE-Automobiles-102979778436253/" />
              </a>
            </span>
            <span>
              <a
                href="https://www.facebook.com/DRIVE-Automobiles-102979778436253/"
                className="social-links flame-hover"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </span>
            <span>
              {" "}
              <a
                href="https://www.instagram.com/driveautomobiles/"
                className="social-links flame-hover"
                target="_blank"
              >
                <FaInstagram />
              </a>
            </span>

            <p>Suivez nous sur les réseaux !</p>
          </div>
          <div className="column-footer">
            <h2>Nos horaires</h2>
            <p>
              <b>LUN</b>,<b>MAR</b>,<b>MER</b>,<b>JEU</b>,<b>VEN</b>: 09:00 -
              19:00
            </p>
            <br></br>
            <p>
              <b>SAM</b>: 10:00 - 18:00
            </p>
            <br></br>
            <p>
              <b>DIM</b>: Fermé
            </p>
            <br></br>
          </div>
        </div>
        <div className="bottom-footer">
          <p>2020 - DRIVE - SIRET: 890 443 013 000 10 | CGU & COOKIES</p>{" "}
        </div>
      </section>
    );
  }
}
