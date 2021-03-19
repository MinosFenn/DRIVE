import React, { useEffect } from "react";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import classes from "../VideoBanner.module.css";
import DriveVideo from "../images/homepage-drive-video.mp4";
import Aos from "aos";
import "aos/dist/aos.css";

const VideoBanner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      data-aos="slide-right"
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
          <Banner
            image="/static/media/Asset 18@0.5x.63bd1b2f.png"
            //   title="DRIVE"
            subtitle="Trouvez la voiture de vos rêves"
          >
            <Link to="/cars" className="btn-video">
              Notre collection
            </Link>
          </Banner>
          {/* <h1>Reactjs Course</h1>
          <p>Learn how to develope React projects</p>
          <button type="button" className="btn btn-outline-dark">
            View the course
          </button>
          <img
            src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="profile"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
