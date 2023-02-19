import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import defaultImg from '../images/contact.jpg';
import PropTypes from 'prop-types';
import Aos from 'aos';
import {IntlProvider, FormattedMessage, FormattedNumber} from 'react-intl'

import 'aos/dist/aos.css';

export default function Event({ event }) {
  // console.log(this.props);
  // console.log(event);
  const { title, image, dates, slug } = event;
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  var date = new Date(dates);
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
          <div className="info-bottom center-content">

            <h6>{date.toLocaleString('fr-FR', { timeZone: 'GMT' })}
</h6>
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
