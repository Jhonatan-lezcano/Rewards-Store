import styled from "styled-components";

export const BannerHistory = styled.div`
  width: 100%auto;
  height: 300px;
  /* background-image: linear-gradient(to top right, #d3cce3, #e9e4f0); */
  background-image: linear-gradient(to top right, #e0eafc, #cfdef3);
  /* box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); */
  box-shadow: 2px 2px 4px -1px rgba(0, 0, 0, 0.25);
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
