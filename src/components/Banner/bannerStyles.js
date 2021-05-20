import styled, { keyframes } from "styled-components";

export const ContainerBanner = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
`;

const movimiento = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(30px);
  }
  100%{
    transform: translateY(0);
  }
`;

export const TitleRewardsStore = styled.div`
  position: absolute;
  bottom: 25%;
  left: 5%;
  animation: ${movimiento} 2.5s linear infinite;
  h1 {
    font-family: "Newsreader", serif;
    font-size: 74px;

    color: #fff;
    text-shadow: 4px 4px 4px gray;
  }
`;
