import Slider from "react-slick";
import SliderWrapper from "../_SlickSliderStyle";

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
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 500,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  return (
    <section className="projects">
      <h2>My Projects</h2>

      <SliderWrapper>
        <Slider settings={settings}>
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
        </Slider>
      </SliderWrapper>

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
