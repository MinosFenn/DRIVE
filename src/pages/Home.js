import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedCars from "../components/FeaturedCars";
import Maps from "../components/Maps";
import VideoBanner from "../components/VideoBanner";

export default function Home() {
  return (
    <>
      {" "}
      <VideoBanner />
      {/* <Hero hero="defaultHero">
        <Banner
          image="/static/media/Asset 18@0.5x.63bd1b2f.png"
          //   title="DRIVE"
          subtitle="Trouvez la voiture de vos rêves"
        >
          <Link to="/cars" className="btn-primary">
            Notre collection
          </Link>
        </Banner>
      </Hero> */}
      <Services />
      <FeaturedCars />
      <Maps />
    </>
  );
}
