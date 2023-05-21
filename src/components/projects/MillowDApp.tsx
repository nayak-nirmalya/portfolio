import React from "react";

import millow from "../../assets/millow.png";

const MillowDApp = () => {
  return (
    <div className="projects__card">
      <h3>Real Estate NFT DApp</h3>
      <img src={millow} alt="Millow" />
      <p>
        Decentralized Zillow, built with Solidity, Hardhat and React. Real Estate NFT DApp. Here
        buyer, seller, inspector and lender can interact and finalize sell.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/millow"
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

export default MillowDApp;
