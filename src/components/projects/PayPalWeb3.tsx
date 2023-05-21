import React from "react";

import paypal_web3 from "../../assets/paypal_web3.png";

const PayPalClone = () => {
  return (
    <div className="projects__card">
      <h3>PayPal Clone (DApp)</h3>
      <img src={paypal_web3} alt="PayPal Clone" />
      <p>
        It's a Full Stack PayPal Clone. Made using React, HardHat, TypeScript, Solidity, Vite, wagmi
        and ethers. User can Request and Send Payment to other User.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/web3_paypal"
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

export default PayPalClone;
