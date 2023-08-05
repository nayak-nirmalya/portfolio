import React from "react";

import eth_daddy from "@assets/eth-daddy.png";

const ETHDaddy = () => {
  return (
    <div className="projects__card">
      <h3>ETH Daddy</h3>
      <img src={eth_daddy} alt="ETH Daddy" />
      <p>
        Similar to GoDaddy website, where every listed domain is an NFT (ERC721). Buyer can collect
        their MetaMask wallet to this website and buy domain with ETH.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/eth_daddy"
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

export default ETHDaddy;
