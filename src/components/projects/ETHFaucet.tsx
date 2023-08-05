import React from "react";

import faucet from "@assets/faucet.png";

const ETHFaucet = () => {
  return (
    <div className="projects__card">
      <h3>ETH Faucet</h3>
      <img src={faucet} alt="ETH Faucet" />
      <p>
        Similar to any ETH test faucet, user can donate or request test ETH. User have to connect
        Metamask Wallet to interact. Address and balance are always displayed.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/eth-faucet"
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

export default ETHFaucet;
