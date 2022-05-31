import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/test1.jpg';
import PropTypes from 'prop-types';
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function Event({ event }) {
  // console.log(this.props);
  console.log(event);
  const { title, image, dates, slug } = event;
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  // const euro = new Intl.NumberFormat('fr-FR', {
  //   style: 'currency',
  //   currency: 'EUR',
  //   minimumFractionDigits: 2,
  // });
  // const km = new Intl.NumberFormat('fr-FR', {
  //   style: 'unit',
  //   unit: 'kilometer',
  // });
  return (
    <article className="event">
      <div data-aos="fade-up" className="car-container">
        <div className="img-container">
          <img src={image || defaultImg} className="test" alt="single event" />
          {/* <div className="name-top">
            <h6>{nom}</h6>
          </div> */}
          <div className="info-bottom">
            <h6>{dates}</h6>
          </div>

          <Link to={`/events/${slug}`} className="btn-primary car-link ">
            Détails
          </Link>
        </div>
        <div className="name-top">
          <h6>{title}</h6>
        </div>
      </div>
      {/* <p className="room-info"></p> */}
    </article>
  );
}
//verify informations validity
Event.propTypes = {
  event: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    dates: PropTypes.string.isRequired,
  }),
};