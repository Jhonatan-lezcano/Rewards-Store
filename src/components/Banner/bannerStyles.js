import styled, { keyframes } from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
`;

export const TitleRewardsStore = styled.div`
  position: absolute;
  bottom: 25%;
  left: 5%;

  h1 {
    font-family: "Newsreader", serif;
    font-size: 74px;
    color: #fff;
    text-shadow: 4px 4px 4px gray;
  }
`;
