import React from "react";

import eth_market from "../../assets/eth_market.png";

const ETHMarketplace = () => {
  return (
    <div className="projects__card">
      <h3>ETH Marketplace</h3>
      <img src={eth_market} alt="ETH Marketplace" />
      <p>
        It's a DApp where user can purchase courses from available courses in Marketplace. Also an
        admin is a superuser who can verify, activate and deactivate any users' course.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/eth-marketplace"
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

export default ETHMarketplace;
