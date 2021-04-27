import styled from "styled-components";

export const HoverCard = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 0;
  padding: 0;
  transition: opacity 0.5s ease;

  .buy-white {
    width: 40px;
    position: absolute;
    top: 11px;
    right: 7px;

    img {
      width: 100%;
    }
  }

  .hover-info {
    height: 100%;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .redeem {
      display: flex;
      align-items: center;

      .points {
        font-size: 36px;
        color: #ffff;
        padding-right: 10px;
      }
    }

    .btn-redeem {
      height: 42px;
      width: 85%;
      margin-top: 10px;
      border: none;
      border-radius: 20px;
      background: #ffff;
      font-size: 18px;
    }
  }
`;

export const CardContainer = styled.div`
  width: 276px;
  height: 276px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  transition: all 0.4s ease;

  .buy-blue {
    width: 35px;
    position: absolute;
    top: 12px;
    right: 12px;

    img {
      width: 100%;
    }
  }
  .line {
    border-top: 1px solid #d9d9d9;
    width: 82%;
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-left: 25px;
    width: 100%;

    .category {
      color: #a3a3a3;
    }
    .product {
      font-weight: bold;
    }
  }

  &:hover {
    transform: translateY(-7px);
  }

  &:hover ${HoverCard} {
    visibility: visible;
    opacity: 1;
    width: 276px;
    height: 276px;
    background: linear-gradient(
      180deg,
      rgba(10, 212, 250, 0.86),
      rgba(37, 187, 241, 0.86)
    );
    position: absolute;
    top: 0;
    left: 0;
  }
`;
