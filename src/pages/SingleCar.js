import React, { Component } from "react";
import defaultBcg from "../images/test1.jpg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { CarContext } from "../Context";
import StyledHero from "../components/StyledHero";
import { SRLWrapper } from "simple-react-lightbox";

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
      <section className="title-single-car">
      <Link to="/cars" className="btn-primary">
              revenir à la liste de voitures
            </Link>
            
      </section>
    

        <section className="single-car">
        <h2>{nom} {type}</h2>
           
          <div className="single-car-info">
          <article className="desc">
          <img src={images[0]} alt="" className="big-image"/>

          <SRLWrapper>


<div className="single-car-images">
    {images.map((item, index) => {
      return <img key={index} src={item} alt={nom} />;
    })}

  </div>      </SRLWrapper>
          </article>
          <article className="info">
          <h3>Informations</h3>
          <ul className="details">
      <li> <span className="title">Marque:</span> <span className="value">{marque}</span></li>
      <li><span className="title">Modèle:</span> <span className="value">{modle}</span></li>
      <li><span className="title">Prix:</span> <span className="value">{prix} €</span></li>
      <li><span className="title">Année:</span> <span className="value">{année}</span></li>
      <li><span className="title">Kilométrage:</span> <span className="value">{kilomtrage} KM</span></li>
      <li><span className="title">Boite de vitesse:</span> <span className="value">{boite}</span></li>
      <li><span className="title">Type:</span> <span className="value">{type}</span></li>
      <li><span className="title">Puissance:</span> <span className="value">{puissance}</span></li>
      <li><span className="title">Moteur:</span> <span className="value">{moteur}</span></li>
      <li><span className="title">Cylindrée:</span> <span className="value">{cylindré}</span></li>
      <li><span className="title">Couleur:</span> <span className="value">{couleur}</span></li>
      <li><span className="title">Nb de places:</span> <span className="value">{place > 1 ? `${place} places` : `${place} place`}</span></li>
      </ul>   </article>
          
          </div>
          <section className="cta">
        <Link to="/contact" className="btn-cta">
              Nous contacter à propos de ce véhicule
            </Link>
            </section>
          <section className="car-extras">
        <h6>Autres informations sur le véhicule:</h6>
        <ul className="extras">
            {extras.map((item,index)=>{
                return <li key={index}>• {item}</li>
            })}
        </ul>
        </section>

        </section>
      




       
      </>
    );
  }
}
