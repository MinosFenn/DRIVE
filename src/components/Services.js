import React, { Component } from "react";
import {
  FaAngleDoubleDown,
  FaAngleDoubleUp,
  FaSistrix,
  FaSketch,
} from "react-icons/fa";
import Title from "./Title";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaAngleDoubleDown />,
        title: "Achat",
        info: "Voitures de sport ? Voitures rares ? Nous sommes intéressés !",
      },
      {
        icon: <FaAngleDoubleUp />,
        title: "Vente",
        info: "Nous proposons à la vente des véhicules d’exceptions, de toutes époques, modernes ou anciennes et pour tout budget.",
      },
      {
        icon: <FaSistrix />,
        title: "Commande",
        info: "Nous effectuons des recherches personnalisées afin de trouver votre véhicule rêvé tout en respectant votre budget et vos goûts. ",
      },
      {
        icon: <FaSketch />,
        title: "Dépôt/Vente",
        info: "Nous nous chargeons de la vente de votre sportive, en la mettant en valeur afin d’en tirer le meilleur prix. Et ça, c’est gratuit !",
      },
    ],
  };
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    Aos.init({
      duration: 2000,
    });
  }
  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item) => {
            return (
              <article
                data-aos="zoom-in-up"
                key={`item-${item.title}`}
                className="service"
              >
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
