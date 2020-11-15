import React, { Component } from "react";
import defaultBcg from "../images/test1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { CarContext } from "../Context";
import StyledHero from "../components/StyledHero";

// import Car from '../components/Car'
// import Car from '../components/Car'

export default class SingleCar extends Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = CarContext;

  // componentDidMount(){}

  render() {
    const { getCar } = this.context;
    const car = getCar(this.state.slug);
    // console.log(car)
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
      marque,
      modle,
      prix,
      année,
      kilomtrage,
      boite,
      type,
      puissance,
      moteur,
      cylindré,
      couleur,
      place,
      extras,
      images,
    } = car;
    console.log(car);
    return (
      <>
        <StyledHero img={images[0]}>
          <Banner title={`${nom}`}>
            <Link to="/cars" className="btn-primary">
              revenir à la liste de voitures
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-info">
          <article className="desc">
          <h3>Détails</h3>
              <p>{description}</p>
          </article>
          <article className="info">
          <h3>Informations</h3>
          
              <h6>      Marque: {marque}</h6>
      <h6>Modèle: {modle}</h6>
      <h6>Prix: {prix} €</h6>
      <h6>Année: {année}</h6>
      <h6>Kilométrage: {kilomtrage} KM</h6>
      <h6>Boite de vitesse: {boite}</h6>
      <h6>Type: {type}</h6>
      <h6>Puissance: {puissance}</h6>
      <h6>Moteur: {moteur}</h6>
      <h6>Cylindrée: {cylindré}</h6>
      <h6>Couleur: {couleur}</h6>
      <h6>Nb de places: {place > 1 ? `${place} places` : `${place} place`}</h6>
          </article>
          </div>
        </section>
        <section className="room-extras">
        <h6>Autres informations sur le véhicule:</h6>
        <ul className="extras">
            {extras.map((item,index)=>{
                return <li key={index}>• {item}</li>
            })}
        </ul>
        <section className="cta">
        <Link to="/contact" className="btn-cta">
              Nous contacter à propos de ce véhicule
            </Link>
            </section>
        </section>

        <div className="single-room-images">
            {images.map((item, index) => {
              return <img key={index} src={item} alt={nom} />;
            })}

          </div>

      </>
    );
  }
}
