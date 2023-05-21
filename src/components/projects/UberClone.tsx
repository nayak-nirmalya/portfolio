import React from "react";

import uber_clone from "../../assets/uber_clone.png";

const UberClone = () => {
  return (
    <div className="projects__card">
      <h3>Uber Clone (Expo)</h3>
      <img src={uber_clone} alt="Uber Clone" />
      <p>
        This Project is a Uber Clone Mobile App made with React Native, Expo, TypeScript,
        TailWindCSS, Redux, React Navigation, Google Places API & Distance Matrix API.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/uber-clone"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default UberClone;
