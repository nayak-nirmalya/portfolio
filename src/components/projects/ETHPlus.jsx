import eth_plus from '../../assets/eth_plus.png'

const ETHPlus = () => {
  return (
    <div className="projects__card">
      <h3>ETH Plus Exchange</h3>
      <img src={eth_plus} alt="ETH Plus Exchange" />
      <p>
        A (ERC20) token exchange platform, where user can buy, sell tokens, also
        user can deposit or withdraw Ethers to exchange. User can also see
        previous transactions.
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
  )
}

export default ETHPlus
