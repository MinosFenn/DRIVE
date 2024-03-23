import React, { useEffect } from "react";

import Services from "../components/Services";
import FeaturedCars from "../components/FeaturedCars";
import Maps from "../components/Maps";
import Carousel from '../components/Carousel/Carousel.js'

export default function Home() {
  return (
    <>
      {" "}
      <Carousel/>
      <Services />
      <FeaturedCars />
      <Maps />
    </>
  );
}
