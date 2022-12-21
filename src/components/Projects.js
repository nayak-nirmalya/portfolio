import todo_dapp from '../assets/todo_dapp.png'
import faucet from '../assets/faucet.png'
import raffle_pic from '../assets/raffle-hardhat-next.png'

import ETHPlus from '../components/projects/ETHPlus'
import NodeShop from '../components/projects/NodeShop'
import MillowDApp from '../components/projects/MillowDApp'
import NFTMarketplace from '../components/projects/NFTMarketplace'
import ETHMarketplace from '../components/projects/ETHMarketplace'
import CrowdFundingDApp from '../components/projects/CrowdFundingDApp'

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        {/* ETH Plus Exchange */}
        <ETHPlus />

        {/* Full Stack Node Shop */}
        <NodeShop />

        {/* Millow DApp */}
        <MillowDApp />

        {/* CrowdFunding DApp */}
        <CrowdFundingDApp />

        {/* NFT Marketplace */}
        <NFTMarketplace />

        {/* ETH Marketplace */}
        <ETHMarketplace />

        {/* Raffle/Lottery DApp */}
        <div className="projects__card">
          <h3>Raffle/Lottery DApp</h3>
          <img src={raffle_pic} alt="Raffle/Lottery DApp" />
          <p>
            It's a DApp where multiple user can enter a raffle with pre defined
            Entrance Fee. After a time interval a random user is pciked as
            winner and gets all Ethers of the contract.
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

        {/* ETH ToDo List DApp */}
        <div className="projects__card">
          <h3>ETH ToDo List DApp</h3>
          <img src={todo_dapp} alt="ETH ToDo List DApp" />
          <p>
            A simple ToDo list app, the difference is it's decentralized. User
            can add various tasks to the list, once the task is complete user
            can mark it is as completed.
          </p>
          <div className="centered">
            <a
              href="https://github.com/nayak-nirmalya/todo-eth"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        {/* ETH Faucet */}
        <div className="projects__card">
          <h3>ETH Faucet</h3>
          <img src={faucet} alt="ETH Faucet" />
          <p>
            Similar to any ETH test faucet, user can donate or request test ETH.
            User can use Metamask Wallet to interact. Address and balance are
            always displayed.
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
      </div>
    </section>
  )
}

export default Projects
