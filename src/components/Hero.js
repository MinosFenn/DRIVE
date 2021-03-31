import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Hero({ children, hero }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <header data-aos="zoom-out" className={hero}>
      {children}
    </header>
  );
}

// Hero.defaultProps={
//     hero:"defaultHero"
// }
