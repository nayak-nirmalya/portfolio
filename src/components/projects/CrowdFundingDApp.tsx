import React from "react";

import eth_crowd from "../../assets/eth_crowd.png";

const CrowdFundingDApp = () => {
  return (
    <div className="projects__card">
      <h3>CrowdFunding DApp</h3>
      <img src={eth_crowd} alt="ETH Kickstarter" />
      <p>
        It&apos;s a DApp where user can create a campaign. Any interested user can donate some ether
        and become a approver, where he/she can approve any proposal.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/eth-crowfund"
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

export default CrowdFundingDApp;
