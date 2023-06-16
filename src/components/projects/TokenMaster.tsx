import React from "react";

import tokenmaster from "../../assets/tokenmaster.png";

const TokenMaster = () => {
  return (
    <div className="projects__card">
      <h3>TokenMaster</h3>
      <img src={tokenmaster} alt="TokenMaster" />
      <p>
        Similar to Ticketmaster website, where various events ticket are listed as NFT (ERC721).
        Buyer can collect their MetaMask wallet to this website and buy tickets.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/tokenmaster"
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

export default TokenMaster;
