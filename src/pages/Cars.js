import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import CarsContainer from "../components/CarContainer";

const Cars = () => {
  return (
    <>
      <div className="container">
        <Hero hero="carsHero1">
          {" "}
          <Banner
            title="Stock"
            subtitle="Retrouvez toute notre collection"
          ></Banner>
        </Hero>
      </div>

      <CarsContainer />
    </>
  );
};

export default Cars;
