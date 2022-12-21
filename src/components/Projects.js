import faucet from '../assets/faucet.png'

import ETHPlus from '../components/projects/ETHPlus'
import ToDoDApp from '../components/projects/ToDoDApp'
import NodeShop from '../components/projects/NodeShop'
import RaffleDApp from '../components/projects/RaffleDApp'
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
        <RaffleDApp />

        {/* ETH ToDo List DApp */}
        <ToDoDApp />

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
