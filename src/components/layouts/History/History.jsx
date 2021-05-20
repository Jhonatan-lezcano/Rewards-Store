import React, { useEffect, useState } from "react";
import { ContainerProducts } from "../../ListProducts/stylesListProducts";
import { ProductHistory, BannerRt } from "./stylesHistory";
import coin from "../../../assets/icons/coin.svg";
import { getHistory } from "../../../services/services";
import { Line } from "../../Filters/stylesFilters";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory().then((response) => {
      setHistory(response.reverse());
    });
  }, []);

  return (
    <div className="animated fadeIn">
      <BannerRt>
        <div className="message-container">
          <h1>Historial de compras</h1>
          <p className="message">
            Esperamos que estes disfrutando estos productos :)
          </p>
        </div>
        <div className="bubbles">
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
      </BannerRt>
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
      <br />
      <br />
      <Line></Line>
    </div>
  );
};

export default History;
