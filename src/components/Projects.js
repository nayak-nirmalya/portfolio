// Import Assets
import eth_plus from '../assets/eth_plus.png'
import todo_dapp from '../assets/todo_dapp.png'

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <div className="projects__card">
          <h3>ETH Plus Exchange</h3>
          <img src={eth_plus} alt="ETH Plus Exchange" />
          <p>
            A token (ERC20) exchange platform, where user can buy, sell tokens,
            also user can deposit or withdraw Ethers to exchange. User can also
            see previous transactions with help of charts.
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
      </div>
    </section>
  )
}

export default Projects
