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
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaAngleDoubleUp />,
        title: "Vente",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaSistrix />,
        title: "Commande",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
      },
      {
        icon: <FaSketch />,
        title: "Collection",
        info:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
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
        <Title title="services" />
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
