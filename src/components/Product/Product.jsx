import React from "react";
import { CardContainer, HoverCard } from "./stylesProduct";
import imgProduct from "../../assets/iPhone8-x1.png";
import buyBlue from "../../assets/icons/buy-blue.svg";

const Product = () => {
  return (
    <div>
      <CardContainer className="card-container">
        <div className="buy">
          <img src={buyBlue} alt="" />
        </div>
        <HoverCard className="card-hover"></HoverCard>
        <div>
          <img src={imgProduct} alt="" />
        </div>
        <div className="line"></div>
        <div className="description">
          <p className="category">Phones</p>
          <p className="product">!Phone 8</p>
        </div>
      </CardContainer>
    </div>
  );
};

export default Product;
