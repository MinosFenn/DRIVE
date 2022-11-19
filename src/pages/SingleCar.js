import React, { Component } from 'react';
import defaultImg from '../images/contact.jpg';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { CarContext } from '../ContextCar';
import StyledHero from '../components/StyledHero';
import { SRLWrapper } from 'simple-react-lightbox';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
// import Car from '../components/Car'
// import Car from '../components/Car'

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultImg,
    };
    console.log(defaultImg)
  }
  componentDidMount() {
    Aos.init();
  }
  static contextType = CarContext;

  // componentDidMount(){}

  render() {
    const emaildft = "matteo@drive-automobiles.fr";
    const teldft = "07 50 41 49 30";
    const namedft = "Matteo Bernard";
    const { getCar } = this.context;
    const car = getCar(this.state.slug);

    if (!car) {
      return (
        <div className="error">
          <h3>Nous n'avons pas trouvé ce véhicule...</h3>
          <Link to="/cars" className="btn-primary">
            retourner aux voitures disponibles
          </Link>
        </div>
      );
    }
    const {
      nom,
      description,
      richdescription,
      marque,
      tlphoneVendeur,
      emailVendeur,
      nomVendeur,
      modle,
      prix,
      anne,
      kilomtrage,
      boite,
      type,
      puissance,
      moteur,
      cylindr,
      couleur,
      place,
      vendeur,
      extras,
      images,
    } = car;
    console.log(car);
    // console.log(car.richdescription.json);

    const euro = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    });

    const km = new Intl.NumberFormat('fr-FR', {
      style: 'unit',
      unit: 'kilometer',
    });
    // Select the first div
    // Select div
    console.log(car.soldcars);
    var phone = {tlphoneVendeur}
console.log(phone);

    return (
      <>
        {' '}
          <section data-aos="fade-right" className="title-single-car">
            {car.soldcars ? (
              <Link
                // data-aos="fade-left"
                to="/sold"
                className="btn-primary"
              >
                revenir à la liste de voitures
              </Link>
            ) : (
              <Link to="/cars" className="btn-primary">
                revenir à la liste de voitures
              </Link>
            )}
          </section>

          <section data-aos="zoom-in-down" className="single-car">
            <h2>{nom}</h2>

            <div data-aos="fade-up" className="single-car-info">
            <SRLWrapper>
            <article className="desc">
                <img src={images[0]} alt="" className="big-image" />
                <div className="single-car-images">
                  {images.map((item, index) => {
                    return <img key={index} src={item} alt={nom} />;
                  })}
                </div>{' '}
              </article>
              </SRLWrapper>
              <article className="info">
                <h3>Informations</h3>
                <ul className="details">
                  <li>
                    {' '}
                    <span className="title">Marque:</span>{' '}
                    <span className="value">{marque}</span>
                  </li>
                  <li>
                    <span className="title">Modèle:</span>{' '}
                    <span className="value">{modle}</span>
                  </li>
                  <div className={`${car.soldcars ? 'hidden' : 'shown'}`}>
                    <li>
                      <span
                        className={`title ${
                          this.props.soldcars ? 'hidden' : 'shown'
                        }`}
                      >
                        Prix:
                      </span>{' '}
                      <span
                        data-aos="fade-left"
                        className={`value ${
                          this.props.soldcars ? 'hidden' : 'shown'
                        }`}
                      >
                        {' '}
                        {car.soldcars ? 'sur demande' : euro.format(prix)}
                      </span>
                    </li>
                  </div>
                  <li>
                    <span className="title">Année:</span>{' '}
                    <span className="value">{anne}</span>
                  </li>
                  <li>
                    <span className="title">Kilométrage:</span>{' '}
                    <span className="value">{km.format(kilomtrage)}</span>
                  </li>
                  <li>
                    <span className="title">Boite de vitesse:</span>{' '}
                    <span className="value">{boite}</span>
                  </li>
                  <li>
                    <span className="title">Type:</span>{' '}
                    <span className="value">{type}</span>
                  </li>
                  <li>
                    <span className="title">Puissance:</span>{' '}
                    <span className="value">{puissance} CH</span>
                  </li>
                  <li>
                    <span className="title">Moteur:</span>{' '}
                    <span className="value">{moteur}</span>
                  </li>
                  <li>
                    <span className="title">Cylindrée:</span>{' '}
                    <span className="value">{cylindr}</span>
                  </li>
                  <li>
                    <span className="title">Couleur:</span>{' '}
                    <span className="value">{couleur}</span>
                  </li>
                  <li>
                    <span className="title">Nb de places:</span>{' '}
                    <span className="value">
                      {place > 1 ? `${place} places` : `${place} place`}
                    </span>
                  </li>
                </ul>{' '}
              </article>
            </div>
            <div data-aos="fade-up" className="single-car-info single-car-info-block2">
              <div data-aos="fade-left" className="desc-vendeur center-content">
                <img src={vendeur.fields.file.url}   alt="" className="image-vendeur" />
                <h3 className="VendeurName">{nomVendeur || namedft}</h3>
                <h4>Téléphone: <a href={`tel:${tlphoneVendeur || teldft}`} className="VendeurTel">{tlphoneVendeur.toString().replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5') || teldft}</a></h4>

</div>
              <div className="info-vendeur">
              <section data-aos="fade-right" className="cta">
              <h3>Nous contacter à propos de ce véhicule:</h3>

              <a href={`mailto:${emailVendeur || emaildft}?subject=${nom}`} className="btn-primary">

                {emailVendeur || emaildft}
              </a>


            </section>
              </div>
            </div>
           
            <section
              data-aos="fade-down"
              data-aos-duration="4000"
              className="car-extras"
            >
              <h6>Autres informations sur le véhicule:</h6>
              <div className="extras">
                {documentToReactComponents(richdescription)}
                {/* {extras.map((item, index) => {
                  return <li key={index}>• {item}</li>;
                })} */}
              </div>
            </section>
          </section>
      </>
    );
  }
}
