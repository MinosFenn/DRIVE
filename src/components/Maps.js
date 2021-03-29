import React, { Component } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default class Maps extends Component {
  componentDidMount() {
    Aos.init();
  }
  render() {
    return (
      <div data-aos="flip-down" className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10681.358982340967!2d-1.5845686!3d47.987821!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd7a411ead78b9ca4!2sDrive%20Automobiles!5e0!3m2!1sen!2sfr!4v1605447674827!5m2!1sen!2sfr"
          className="Google-maps"
        ></iframe>
      </div>
    );
  }
}
