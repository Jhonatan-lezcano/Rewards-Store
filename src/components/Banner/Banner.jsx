import React from "react";
import { ContainerBanner } from "./bannerStyles";
import banner from "../../assets/header.png";

const Banner = () => {
  return (
    <ContainerBanner>
      <img src={banner} alt="" />
    </ContainerBanner>
  );
};

export default Banner;
