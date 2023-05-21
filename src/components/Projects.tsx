import React from "react";
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
  MessengerClone,
} from "./projects/_index";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3.6,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1600 },
      items: 3.2,
    },
    smallDesktop: {
      breakpoint: { max: 1600, min: 1500 },
      items: 2.8,
    },
    normalDesktop: {
      breakpoint: { max: 1500, min: 1400 },
      items: 2.6,
    },
    largeTab: {
      breakpoint: { max: 1400, min: 1300 },
      items: 2.4,
    },
    tab: {
      breakpoint: { max: 1300, min: 1200 },
      items: 2,
    },
    smallTab: {
      breakpoint: { max: 1200, min: 1000 },
      items: 1.4,
    },
    tablet: {
      breakpoint: { max: 1000, min: 800 },
      items: 1.2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onClick, active, index, carouselState: { currentSlide, deviceType } }) => {
    return (
      <li className="slider" onClick={() => onClick()}>
        {active ? <span className="slickdot active"></span> : <span className="slickdot"></span>}
      </li>
    );
  };

  return (
    <section className="projects">
      <h2 className="font-bold">My Projects</h2>

      <Carousel
        partialVisible
        showDots
        // infinite={true}
        autoPlay
        autoPlaySpeed={6000}
        rewind
        rewindWithAnimation
        shouldResetAutoplay={true}
        dotListClass="dotClass"
        renderDotsOutside
        customDot={<CustomDot />}
        responsive={responsive}
      >
        <RedditFirebase />
        <MessengerClone />
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
