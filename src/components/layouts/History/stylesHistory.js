import styled, { keyframes } from "styled-components";

const flotar = keyframes`
0%{
  bottom: 0;
  opacity: 0;
}
30%{
  transform: translateX(30px);
}
50%{
  opacity: 0.7;
}
100%{
  bottom: 340px;
  opacity: 0
  }
`;

export const BannerHistory = styled.div`
  width: 100%auto;
  height: 350px;
  background-image: linear-gradient(to top right, #e0eafc, #cfdef3);
  box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding-left: 100px;
  position: relative;
  margin-bottom: 50px;

  h1 {
    font-size: 40px;
  }

  .message-container {
    .message {
      font-size: 30px;
      color: #a3a3a3;
    }
  }

  .bubbles {
    overflow: hidden;

    .bubble {
      border-radius: 50%;
      background: #fff;
      opacity: 0.7;
      position: absolute;
      bottom: -150px;
      animation: ${flotar} 3s linear infinite;

      &:nth-child(1) {
        width: 70px;
        height: 70px;
        left: 5%;
        animation-duration: 3s;
        animation-delay: 3s;
      }

      &:nth-child(2) {
        width: 50px;
        height: 50px;
        left: 35%;
        animation-duration: 3s;
        animation-delay: 5s;
      }

      &:nth-child(3) {
        width: 15px;
        height: 15px;
        left: 30%;
        animation-duration: 2s;
        animation-delay: 2s;
      }

      &:nth-child(4) {
        width: 60px;
        height: 60px;
        left: 50%;
        animation-duration: 3s;
        animation-delay: 4s;
      }

      &:nth-child(5) {
        width: 70px;
        height: 70px;
        left: 70%;
        animation-duration: 3s;
        animation-delay: 4s;
      }

      &:nth-child(6) {
        width: 55px;
        height: 55px;
        left: 90%;
        animation-duration: 2s;
        animation-delay: 3s;
      }

      &:nth-child(7) {
        width: 15px;
        height: 15px;
        left: 75%;
        animation-duration: 2s;
        animation-delay: 4s;
      }

      &:nth-child(8) {
        width: 25px;
        height: 25px;
        left: 55%;
        animation-duration: 2s;
        animation-delay: 5s;
      }
    }
  }
`;

export const ProductHistory = styled.div`
  width: 276px;
  height: 276px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .line {
    border-top: 1px solid #d9d9d9;
    width: 82%;
  }

  .description {
    width: 100%;
    padding: 25px 25px 0 25px;

    .info-product {
      display: flex;
      justify-content: space-between;

      .category {
        color: #a3a3a3;
      }

      .price {
        display: flex;
        .coin {
          width: 24px;
          margin-left: 5px;
        }
      }
    }

    .bold {
      font-weight: bold;
    }
  }
`;
