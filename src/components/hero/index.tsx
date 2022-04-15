import React from "react";
import "./index.scss";

import AppleStore from "../../assets/images/apple-store-icon.png";
import Playstore from "../../assets/images/playstore-icon.svg";
const Benefits = () => {
  return (
    <div className="hero_container container">
      <p className="heading">Coming Soon</p>
      <p className="subtitle col-md-5 text-center mx-auto mb-5">
        SDG Health Education Mobile App aims to encourage people to adopt and
        sustain health promoting life style and practices
      </p>

      <div className="btn-container d-flex flex-column  flex-md-row justify-content-between align-items-center col-lg-4 col-md-6 col-11  mx-auto align-items-center mb-5">
        <button className="d-flex justify-content-between align-items-center">
          <div className="left ">
            <img src={Playstore} alt="play store" />
          </div>
          <div className="right">
            <div>Coming soon on</div>
            <div className="title">Google Play</div>
          </div>
        </button>
        <button className="d-flex  mt-3 mt-md-0 justify-content-between align-items-center">
          <div className="left">
            <img src={AppleStore} alt="play store" />
          </div>
          <div className="right">
            <div>Coming soon on</div>
            <div className="title">App Store</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Benefits;
