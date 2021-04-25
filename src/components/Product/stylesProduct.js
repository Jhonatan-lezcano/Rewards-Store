import styled from "styled-components";

export const HoverCard = styled.div`
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
  display: none;
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

  .buy {
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
`;
