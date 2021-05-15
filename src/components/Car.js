import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/test1.jpg";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Car({ car }) {
  // console.log(this.props)

  console.log(car);
  const { nom, slug, images, prix, kilomtrage, soldcars } = car;
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const euro = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });
  const km = new Intl.NumberFormat("fr-FR", {
    style: "unit",
    unit: "kilometer",
  });
  return (
    <article className="car">
      <div data-aos="fade-up" className="car-container">
        <div className="img-container">
          <img
            src={images[0] || defaultImg}
            className="test"
            alt="single car"
          />
          {/* <div className="name-top">
            <h6>{nom}</h6>
          </div> */}
          <div className="info-bottom">
            <h6>{km.format(kilomtrage)}</h6>
          </div>

          <div
            // className="info-bottom"
            className={`info-bottom ${car.soldcars ? "hidden" : "shown"}`}
          >
            <h6> {car.soldcars ? "Demander le prix" : euro.format(prix)}</h6>
          </div>

          <Link to={`/cars/${slug}`} className="btn-primary car-link ">
            Détails
          </Link>
        </div>
        <div className="name-top">
          <h6>{nom}</h6>
        </div>
      </div>
      {/* <p className="room-info"></p> */}
    </article>
  );
}
//verify informations validity
Car.propTypes = {
  car: PropTypes.shape({
    nom: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    prix: PropTypes.number.isRequired,
    soldcars: PropTypes.bool.isRequired,
    kilométrage: PropTypes.number.isRequired,
  }),
};
