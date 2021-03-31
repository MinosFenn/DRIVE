import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Banner({ children, title, subtitle, image }) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="slide-up" className=" banner banner-bg">
      <img src={image}></img>

      <h1>{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
