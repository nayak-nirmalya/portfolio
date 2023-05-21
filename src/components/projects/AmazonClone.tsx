import React from "react";

import amazon_clone from "../../assets/amazon_clone.png";

const AmazonClone = () => {
  return (
    <div className="projects__card">
      <h3>Amazon Clone (DApp)</h3>
      <img src={amazon_clone} alt="Amazon Clone" />
      <p>
        It&apos;s a Full Stack Amazon Clone. Made using React, HardHat, TypeScript, Solidity. Owner
        of contract can list products and user can connect with help of Metamask to buy listed
        products.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/amazon-fs-web3"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Front-End
        </a>
        <a
          href="https://github.com/nayak-nirmalya/amazon-hardhat-backend"
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

export default AmazonClone;
