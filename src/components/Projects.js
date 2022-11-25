import eth_plus from '../assets/eth_plus.png'
import todo_dapp from '../assets/todo_dapp.png'
import faucet from '../assets/faucet.png'
import millow from '../assets/millow.png'
import eth_crowd from '../assets/eth_crowd.png'
import eth_market from '../assets/eth_market.png'
import nft_marketplace from '../assets/nft_marketplace.png'
import raffle_pic from '../assets/raffle-hardhat-next.png'

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        {/* ETH Plus Exchange */}
        <div className="projects__card">
          <h3>ETH Plus Exchange</h3>
          <img src={eth_plus} alt="ETH Plus Exchange" />
          <p>
            A (ERC20) token exchange platform, where user can buy, sell tokens,
            also user can deposit or withdraw Ethers to exchange. User can also
            see previous transactions.
          </p>

          <div className="centered">
            <a
              href="https://github.com/nayak-nirmalya/eth-plus-exchange"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        {/* Millow DApp */}
        <div className="projects__card">
          <h3>Real Estate NFT DApp</h3>
          <img src={millow} alt="Millow" />
          <p>
            Decentralized Zillow, built with Solidity, Hardhat and React. Real
            Estate NFT DApp. Here buyer, seller, inspector and lender can
            interact and finalize sell.
          </p>
          <div className="centered">
            <a
              href="https://github.com/nayak-nirmalya/millow"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        {/* CrowdFunding DApp */}
        <div className="projects__card">
          <h3>CrowdFunding DApp</h3>
          <img src={eth_crowd} alt="ETH Kickstarter" />
          <p>
            It's a DApp where user can create a campaign. Any interested user
            can donate some ether and become a approver, where he/she can
            approve any proposal.
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

        {/* NFT Marketplace */}
        <div className="projects__card">
          <h3>NFT Marketplace</h3>
          <img src={nft_marketplace} alt="NFT Marketplace" />
          <p>
            It's a NFT Marketplace similar to OpenSeas where user can list NFTs.
            Any interested user can buy the listed NFTs. The owner can change
            the price of NFT as well.
          </p>
          <div className="centered">
            <a
              href="https://github.com/nayak-nirmalya/hardhat-fcc-nft-moralis"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

        {/* ETH Marketplace */}
        <div className="projects__card">
          <h3>ETH Marketplace</h3>
          <img src={eth_market} alt="ETH Marketplace" />
          <p>
            It's a DApp where user can purchase courses from available courses
            in Marketplace. Also an admin is a superuser who can verify,
            activate and deactivate any users' course.
          </p>
          <div className="centered">
            <a
              href="https://github.com/nayak-nirmalya/eth-marketplace"
              target="_blank"
              rel="noreferrer"
              className="button"
            >
              Code
            </a>
          </div>
        </div>

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
