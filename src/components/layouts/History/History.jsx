import React, { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { ContainerProducts } from "../../ListProducts/stylesListProducts";
import { ProductHistory, BannerHistory } from "./stylesHistory";
import coin from "../../../assets/icons/coin.svg";

const History = () => {
  const { history } = useContext(UserContext);

  console.log(history);

  return (
    <div>
      <BannerHistory>
        <h1 style={{ "text-align": "center" }}>Historial de compras</h1>
        <p>Esperamos que estes disfrutando estos productos :) </p>
      </BannerHistory>
      <ContainerProducts>
        {history.map((item, index) => {
          const { name, cost, category, img } = item;
          return (
            <ProductHistory key={item._id + index}>
              <img src={img.url} alt="producto" />
              <div className="line"></div>
              <div className="description">
                <div className="info-product">
                  <p className="category">{category}</p>
                  <div className="price">
                    <p className="bold">{cost}</p>
                    <img className="coin" src={coin} alt="" />
                  </div>
                </div>
                <p className="bold">{name}</p>
              </div>
            </ProductHistory>
          );
        })}
      </ContainerProducts>
    </div>
  );
};

export default History;
