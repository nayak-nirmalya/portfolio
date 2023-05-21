import raffle_pic from '../../assets/raffle-hardhat-next.png'

const RaffleDApp = () => {
  return (
    <div className="projects__card">
      <h3>Raffle/Lottery DApp</h3>
      <img src={raffle_pic} alt="Raffle/Lottery DApp" />
      <p>
        It's a DApp where multiple user can enter a raffle with pre defined
        Entrance Fee. After a time interval a random user is pciked as winner
        and gets all Ethers of the contract.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/raffle-dapp"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default RaffleDApp
