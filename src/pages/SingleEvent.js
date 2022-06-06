import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { EventContext } from '../Context';
import StyledHero from '../components/StyledHero';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Car from '../components/Car'
// import Car from '../components/Car'

export default class SingleEvent extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
    };
  }
  componentDidMount() {
    Aos.init();
  }
  static contextType = EventContext;

  // componentDidMount(){}

  render() {
    const { getEvent } = this.context;
    const event = getEvent(this.state.slug);
    console.log(event);
    if (!event) {
      return (
        <div className="error">
          <h3>Nous n'avons pas trouvé cet évènement...</h3>
          <Link to="/events" className="btn-primary">
            retourner aux évènements disponibles
          </Link>
        </div>
      );
    }
    const { title, description, lien, location, image, cta, ctalink } = event;
    console.log(location.long);

    // console.log(car.richdescription.json);
    return (
      <>
        {' '}
        <section data-aos="fade-right" className="title-single-car">
          <Link to="/events" className="btn-primary">
            revenir à la liste d'évènements
          </Link>
        </section>
        <section data-aos="zoom-in-down" className="single-car">
          <h2>{title}</h2>

          <div data-aos="fade-up" className="single-event-info">
            <article className="img-block">
              <img src={image} alt="" className="event-image" />
            </article>
          </div>

          <section
            data-aos="fade-down"
            data-aos-duration="4000"
            className="car-extras"
          >
            <h6>En savoir plus:</h6>
            <div className="extras">
              {documentToReactComponents(description)}
              {/* {extras.map((item, index) => {
                  return <li key={index}>• {item}</li>;
                })} */}
            </div>
          </section>
          <section data-aos="fade-right" className="cta">
            <a href={ctalink} target="_blank" className="btn-cta">
              {cta}
            </a>
          </section>
          <section data-aos="fade-right" className="cta">
            <Link to="/contact" className="btn-cta">
              Nous contacter à propos de cet évènement
            </Link>
          </section>
          <div data-aos="fade-up" className="single-event-info">
            <article className="img-block">
              <iframe
                className="event-image"
                height="600px"
                src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyDUor6NqKUWU1kuJND-ciK_EfDA9NYirbE&center=${location.lat},${location.lon}&zoom=18&maptype=roadmap`}
              ></iframe>
            </article>
          </div>
        </section>
      </>
    );
  }
}
