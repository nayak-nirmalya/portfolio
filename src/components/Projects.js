import ETHPlus from '../components/projects/ETHPlus'
import ToDoDApp from '../components/projects/ToDoDApp'
import NodeShop from '../components/projects/NodeShop'
import ETHFaucet from '../components/projects/ETHFaucet'
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
        <ETHFaucet />
      </div>
    </section>
  )
}

export default Projects
