import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ETHPlus from "./projects/ETHPlus";
import ToDoDApp from "./projects/ToDoDApp";
import ETHDaddy from "./projects/ETHDaddy";
import ToDoDeno from "./projects/ToDoDeno";
import NodeShop from "./projects/NodeShop";
import NoteTaker from "./projects/NoteTaker";
import ETHFaucet from "./projects/ETHFaucet";
import RaffleDApp from "./projects/RaffleDApp";
import MillowDApp from "./projects/MillowDApp";
import PayPalClone from "./projects/PayPalWeb3";
import GraphQLBlog from "./projects/GraphQLBlog";
import AmazonClone from "./projects/AmazonClone";
import TwitterClone from "./projects/TwitterClone";
import NetflixClone from "./projects/NetflixClone";
import FacebookClone from "./projects/FacebookClone";
import EtherscanClone from "./projects/EtherscanClone";
import RedditFirebase from "./projects/RedditFirebase";
import NFTMarketplace from "./projects/NFTMarketplace";
import ETHMarketplace from "./projects/ETHMarketplace";
import EmployeeManagement from "./projects/EmployeeMGMT";
import CrowdFundingDApp from "./projects/CrowdFundingDApp";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2.8,
    },
  };

  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li className="slider" onClick={() => onClick()}>
        {active ? (
          <>
            <span className="active">*</span>
          </>
        ) : (
          <>
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
            />
            <span className="material-symbols-outlined inactive">
              check_indeterminate_small
            </span>
          </>
        )}
      </li>
    );
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <Carousel
        partialVisible
        showDots
        dotListClass="dotClass"
        renderDotsOutside
        customDot={<CustomDot />}
        responsive={responsive}
      >
        <RedditFirebase />
        <NetflixClone />
        <TwitterClone />
        <AmazonClone />
        <NodeShop />
        <PayPalClone />
        <MillowDApp />
        <GraphQLBlog />
        <FacebookClone />
        <ETHPlus />
        <ETHDaddy />
        <EmployeeManagement />
        <EtherscanClone />
        <ToDoDeno />
        <CrowdFundingDApp />
        <NoteTaker />
        <NFTMarketplace />
        <ETHMarketplace />
        <RaffleDApp />
        <ToDoDApp />
        <ETHFaucet />
      </Carousel>
    </section>
  );
};

export default Projects;
