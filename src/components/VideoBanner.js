import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import classes from "../VideoBanner.module.css";
import DriveVideo from "../images/homepage-drive-video.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "../images/Asset 18@0.5x.png";
const VideoBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="zoom-out"
      data-aos-duration="5000"
      className={classes.Container}
    >
      <video
        rel="preload"
        autoPlay="autoplay"
        loop="loop"
        muted
        className={classes.Video}
      >
        <source src={DriveVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={classes.Content}>
        <div className={classes.SubContent}>
          {/* <Banner
            image="/static/media/Asset 18@0.5x.63bd1b2f.png"
            //   title="DRIVE"
            subtitle="Trouvez la voiture de vos rêves"
          >
            <Link to="/cars" className="btn-video">
              Notre collection
            </Link>
          </Banner> */}
          <img src={Image} alt="profile" />
          <div className={classes.Divider}></div>
          <h2>Trouvez La Voiture De Vos Rêves</h2>
          <button to="/cars" className={classes.VideoButton}>
            <Link to="/cars">Notre collection</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
