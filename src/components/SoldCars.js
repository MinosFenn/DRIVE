import React, { Component } from "react";
import Title from "./Title";

import { CarContext } from "../Context";
import Car from "./Car";

import Loading from "./Loading";

export default class SoldCars extends Component {
  static contextType = CarContext;
  render() {
    let { loading, soldCars: cars } = this.context;

    cars = cars.map((car) => {
      // console.log(car)

      return <Car key={car.id} car={car} />;
    });

    return (
      <section className="featured-cars">
        <Title title="Elles ont prises la route" />
        <div className="featured-cars-center">
          {loading ? <Loading /> : cars}
        </div>{" "}
      </section>
    );
  }
}
