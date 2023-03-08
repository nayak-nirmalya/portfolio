import etherscan_clone from "../../assets/etherscan_clone.png";

const EtherscanClone = () => {
  return (
    <div className="projects__card">
      <h3>Etherscan Clone</h3>
      <img src={etherscan_clone} alt="Etherscan Clone" />
      <p>It is a clone of popular Ethereum block explorer Etherscan.</p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/etherscan-clone"
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

export default EtherscanClone;
