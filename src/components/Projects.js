import ETHPlus from "../components/projects/ETHPlus";
import ToDoDApp from "../components/projects/ToDoDApp";
import ETHDaddy from "../components/projects/ETHDaddy";
import ToDoDeno from "../components/projects/ToDoDeno";
import NodeShop from "../components/projects/NodeShop";
import RedditFirebase from "../components/projects/RedditFirebase";
import GraphQLBlog from "../components/projects/GraphQLBlog";
import ETHFaucet from "../components/projects/ETHFaucet";
import RaffleDApp from "../components/projects/RaffleDApp";
import MillowDApp from "../components/projects/MillowDApp";
import NFTMarketplace from "../components/projects/NFTMarketplace";
import ETHMarketplace from "../components/projects/ETHMarketplace";
import CrowdFundingDApp from "../components/projects/CrowdFundingDApp";

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>

      <div className="projects__cards">
        <RedditFirebase />
        <ETHPlus />
        <NodeShop />
        <MillowDApp />
        <GraphQLBlog />
        <ETHDaddy />
        <ToDoDeno />
        <CrowdFundingDApp />
        <NFTMarketplace />
        <ETHMarketplace />
        <RaffleDApp />
        <ToDoDApp />
        <ETHFaucet />
      </div>
    </section>
  );
};

export default Projects;
