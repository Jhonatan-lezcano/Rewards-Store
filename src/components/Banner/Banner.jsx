import React from "react";
import { ContainerBanner, TitleRewardsStore } from "./bannerStyles";
import banner from "../../assets/header.png";

const Banner = () => {
  return (
    <ContainerBanner>
      <img src={banner} alt="" />
      <TitleRewardsStore>
        <h1>Rewards-Store</h1>
      </TitleRewardsStore>
    </ContainerBanner>
  );
};

export default Banner;
