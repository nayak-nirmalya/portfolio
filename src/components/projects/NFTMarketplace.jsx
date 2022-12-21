import nft_marketplace from '../../assets/nft_marketplace.png'

const NFTMarketplace = () => {
  return (
    <div className="projects__card">
      <h3>NFT Marketplace</h3>
      <img src={nft_marketplace} alt="NFT Marketplace" />
      <p>
        It's a NFT Marketplace similar to OpenSeas where user can list NFTs. Any
        interested user can buy the listed NFTs. The owner can change the price
        of NFT as well.
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
  )
}

export default NFTMarketplace
