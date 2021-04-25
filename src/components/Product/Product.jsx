import React from "react";
import { CardContainer, HoverCard } from "./stylesProduct";
import imgProduct from "../../assets/iPhone8-x1.png";
import buyBlue from "../../assets/icons/buy-blue.svg";

const Product = () => {
  return (
    <div>
      <CardContainer>
        <div className="buy">
          <img src={buyBlue} alt="" />
        </div>
        <div>
          <img src={imgProduct} alt="" />
        </div>
        <div className="line"></div>
        <div className="description">
          <p className="category">Phones</p>
          <p className="product">!Phone 8</p>
        </div>
        <HoverCard className="card-hover"></HoverCard>
      </CardContainer>
    </div>
  );
};

export default Product;
