import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  EmployeeManagement,
  ETHPlus,
  ETHMarketplace,
  ToDoDApp,
  ETHDaddy,
  ToDoDeno,
  RedditFirebase,
  FacebookClone,
  NodeShop,
  NoteTaker,
  NFTMarketplace,
  ETHFaucet,
  TwitterCloneFlutter,
  RaffleDApp,
  GraphQLBlog,
  AmazonClone,
  TinderClone,
  NetflixClone,
  UberClone,
  DeliverooClone,
  EtherscanClone,
  TMDB,
  TwitterClone,
  CrowdFundingDApp,
  MillowDApp,
  PayPalClone,
} from "./projects/_index";

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
          <span className="slickdot active"></span>
        ) : (
          <span className="slickdot"></span>
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
        autoPlay
        rewind
        rewindWithAnimation
        shouldResetAutoplay
        dotListClass="dotClass"
        renderDotsOutside
        customDot={<CustomDot />}
        responsive={responsive}
      >
        <RedditFirebase />
        <NetflixClone />
        <TinderClone />
        <TwitterClone />
        <UberClone />
        <TMDB />
        <TwitterCloneFlutter />
        <AmazonClone />
        <NodeShop />
        <DeliverooClone />
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
