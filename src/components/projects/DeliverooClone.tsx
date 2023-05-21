import React from "react";

import deliveroo_clone from "../../assets/deliveroo_clone.png";

const DeliverooClone = () => {
  return (
    <div className="projects__card">
      <h3>Deliveroo Clone (Expo)</h3>
      <img src={deliveroo_clone} alt="Deliveroo Clone" />
      <p>
        This Project is a Deliveroo Clone Mobile App with React Native, Expo, JavaScript,
        TailWindCSS, Sanity CMS, Redux, React Native Navigation & GROQ.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/deliveroo-clone"
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

export default DeliverooClone;
