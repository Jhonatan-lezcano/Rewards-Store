import React from "react";
import { Container } from "./headerStyles";
import logo from "../../assets/icons/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";

const Header = () => {
  return (
    <Container>
      <img src={logo} alt="" />
      <div>
        <p>Julia Coi</p>
        <div>
          <p>6000</p> <img src={coin} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
