import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../Carousel/partials/carousel.css' 

import Aos from "aos";
import "aos/dist/aos.css";

const CarouselSlide = (props) => {
    const {id, slideTitle, slideDescription, slideBG, slideBTN} = props
    useEffect(() => {
      Aos.init();
    }, []);
  return (

<div data-aos="fade-in" className="slideWrap" style={{ backgroundImage: `url(${slideBG})`}}> 
<div data-aos="slide-up"className="backgroundOverlay">
    <div div className="textWrap">
        <h2 className="titleSlider">{slideTitle}</h2>
        <div className ="spacer"></div>
        <p className="descriptionSlider">{slideDescription}</p>
        <a href="/cars" className="btn">
            {slideBTN}
          </a>
          </div>
          </div>
          </div> 
           )
}

export default CarouselSlide