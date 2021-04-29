import React, { useContext } from "react";
import { Container } from "./headerStyles";
import logo from "../../assets/icons/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/UserContext";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <img src={logo} alt="" />
      <div>
        <p>{user.name}</p>
        <div>
          <p>{user.points}</p> <img src={coin} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Header;
