import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import ETHPlus from "../components/projects/ETHPlus";
import ToDoDApp from "../components/projects/ToDoDApp";
import ETHDaddy from "../components/projects/ETHDaddy";
import ToDoDeno from "../components/projects/ToDoDeno";
import NodeShop from "../components/projects/NodeShop";
import NoteTaker from "../components/projects/NoteTaker";
import EmployeeManagement from "./projects/EmployeeMGMT";
import ETHFaucet from "../components/projects/ETHFaucet";
import RaffleDApp from "../components/projects/RaffleDApp";
import MillowDApp from "../components/projects/MillowDApp";
import GraphQLBlog from "../components/projects/GraphQLBlog";
import RedditFirebase from "../components/projects/RedditFirebase";
import NFTMarketplace from "../components/projects/NFTMarketplace";
import ETHMarketplace from "../components/projects/ETHMarketplace";
import CrowdFundingDApp from "../components/projects/CrowdFundingDApp";

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
    // tablet: {
    //   breakpoint: { max: 1024, min: 464 },
    //   items: 2,
    // },
    // mobile: {
    //   breakpoint: { max: 464, min: 0 },
    //   items: 1,
    // },
  };

  // https://github.com/YIZHUANG/react-multi-carousel/issues/14

  const CustomDot = ({ onMove, index, onClick, active }) => {
    return (
      <li className="slider" onClick={() => onClick()}>
        {active ? (
          <>
            {/* <span className="active">{index + 1}</span> */}
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
        <ETHPlus />
        <NodeShop />
        <MillowDApp />
        <GraphQLBlog />
        <NoteTaker />
        <ETHDaddy />
        <EmployeeManagement />
        <ToDoDeno />
        <CrowdFundingDApp />
        <NFTMarketplace />
        <ETHMarketplace />
        <RaffleDApp />
        <ToDoDApp />
        <ETHFaucet />
      </Carousel>

      {/* <div className="projects__cards">
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
      </div> */}
    </section>
  );
};

export default Projects;
