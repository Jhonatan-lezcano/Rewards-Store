import React, { useContext, useState } from "react";
import { CardContainer, HoverCard } from "./stylesProduct";
import buyBlue from "../../assets/icons/buy-blue.svg";
import buyWhite from "../../assets/icons/buy-white.svg";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/UserContext";
import { useRedeem } from "../../hooks/useRedeem";
import { Link } from "react-router-dom";

const Product = (props) => {
  const { _id, name, cost, category, img } = props.info;
  const { user, setUser } = useContext(UserContext);
  const [productId, setProductId] = useState("");
  useRedeem(productId);

  const handleBuyNow = (e) => {
    e.preventDefault();
    const newPoints = {
      _id: user._id,
      name: user.name,
      points: user.points - cost,
      createDate: user.createDate,
      __v: user.__v,
      redeemHistory: user.redeemHistory,
    };
    setUser(newPoints);
    setProductId(_id);
  };

  return (
    <div>
      <CardContainer>
        {cost > user.points ? (
          <div className="missing">
            <p>Te faltan {cost - user.points}</p>
            <img src={coin} alt="coin" />
          </div>
        ) : (
          <div className="buy-blue">
            <img src={buyBlue} alt="" />
          </div>
        )}

        <div className="contImgP">
          <img className="imgProduct" src={img.url} alt="" />
        </div>
        <div className="line"></div>
        <div className="description">
          <p className="category">{category}</p>
          <p className="product">{name}</p>
        </div>
        <HoverCard>
          <div className="buy-white">
            <img src={buyWhite} alt="" />
          </div>
          <div className="hover-info">
            <div className="redeem">
              <p className="points">{cost}</p>
              <img src={coin} alt="" />
            </div>
            {cost > user.points ? (
              <Link to="/recharge" className="btn-redeem">
                Recargar puntos
              </Link>
            ) : (
              <button onClick={handleBuyNow} className="btn-redeem">
                Comprar ahora
              </button>
            )}
          </div>
        </HoverCard>
      </CardContainer>
    </div>
  );
};

export default Product;
