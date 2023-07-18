import React from "react";

import nike from "../../assets/nike.png";

const NikeApp = () => {
  return (
    <div className="projects__card">
      <h3>Nike Shopping App</h3>
      <img src={nike} alt="Nike App" />
      <p>
        Full Stack Nike Shopping Mobile App for Anddroid & iOS. Product page shows all available
        shoes. Click on an item to see details & add to cart. Place order by paying with Stripe API.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/NikeApp"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Front-End
        </a>
        <a
          href="https://github.com/nayak-nirmalya/NikeAPI"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Back-End
        </a>
      </div>
    </div>
  );
};

export default NikeApp;
