import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import SoldCars from "../components/SoldCars";

const Sold = () => {
  return (
    <>
      <div className="container">
        <Hero hero="carsHero3">
          {" "}
          <Banner
            title="Vendu"
            subtitle="Un modèle vous plaît ? passez commande !"
          ></Banner>
        </Hero>
      </div>

      <SoldCars />
    </>
  );
};

export default Sold;
