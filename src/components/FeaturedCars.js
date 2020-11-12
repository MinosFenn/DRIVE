import React, { Component } from "react";
import Title from "./Title";

import { CarContext } from "../Context";
import Car from "./Car";

import Loading from "./Loading";

export default class FeaturedCars extends Component {
  static contextType = CarContext;
  render() {
    let { loading, featuredCars: cars } = this.context;

    cars = cars.map(car => {
      // console.log(car)

      return <Car key={car.id} car={car} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Notre sélection" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : cars}
        </div>{" "}
        </section>
    );
  }
}
