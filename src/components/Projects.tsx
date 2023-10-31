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
  IonicCapacitor,
  SpotifyClone,
  TokenMaster,
  NikeApp,
  AI_SaaS,
  AI_Companion,
  Metaversus,
  DiscordClone,
  Quill
} from "@components/projects/_index";
import CustomDot from "@components/CustomDot";

const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5.4
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 2000 },
      items: 3.6
    },
    mediumDesktop: {
      breakpoint: { max: 2000, min: 1800 },
      items: 3.4
    },
    desktop: {
      breakpoint: { max: 1800, min: 1600 },
      items: 3.2
    },
    smallDesktop: {
      breakpoint: { max: 1600, min: 1500 },
      items: 3
    },
    normalDesktop: {
      breakpoint: { max: 1500, min: 1400 },
      items: 2.6
    },
    largeTab: {
      breakpoint: { max: 1400, min: 1300 },
      items: 2.4
    },
    tab: {
      breakpoint: { max: 1300, min: 1200 },
      items: 2
    },
    smallTab: {
      breakpoint: { max: 1200, min: 1000 },
      items: 1.6
    },
    tablet: {
      breakpoint: { max: 1000, min: 800 },
      items: 1.4
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1
    }
  };

  return (
    <section id="projects" className="flex flex-col px-0 pb-0 pt-2 lg:px-24">
      <h2 className="mx-auto items-center p-3 text-4xl font-extrabold lg:mx-12 lg:p-6">
        My Projects
      </h2>

      <Carousel
        partialVisible
        showDots
        autoPlay
        autoPlaySpeed={6000}
        rewind
        rewindWithAnimation
        shouldResetAutoplay={true}
        dotListClass="dotClass"
        renderDotsOutside={true}
        customDot={<CustomDot />}
        responsive={responsive}
      >
        <DiscordClone />
        <AI_SaaS />
        <Quill />
        <RedditFirebase />
        <AI_Companion />
        <MessengerClone />
        <SpotifyClone />
        <TinderClone />
        <TwitterClone />
        <NetflixClone />
        <UberClone />
        <NikeApp />
        <IonicCapacitor />
        <TMDB />
        <TokenMaster />
        <TwitterCloneFlutter />
        <AmazonClone />
        <NodeShop />
        <DeliverooClone />
        <PayPalClone />
        <MillowDApp />
        <Metaversus />
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
