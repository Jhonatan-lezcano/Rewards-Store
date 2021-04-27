import React from "react";
import { CardContainer, HoverCard } from "./stylesProduct";
import imgProduct from "../../assets/iPhone8-x1.png";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";

const Product = () => {
  return (
    <div>
      <CardContainer>
        <div className="buy-blue">
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
        <HoverCard>
          <div className="buy-white">
            <img src={buyWhite} alt="" />
          </div>
          <div className="hover-info">
            <div className="redeem">
              <p className="points">12.000</p> <img src={coin} alt="" />
            </div>
            <button className="btn-redeem">Redeem now</button>
          </div>
        </HoverCard>
      </CardContainer>
    </div>
  );
};

export default Product;
