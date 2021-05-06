import React, { useContext } from "react";
import { Container } from "./headerStyles";
import logo from "../../assets/icons/aerolab-logo.svg";
import coin from "../../assets/icons/coin.svg";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <nav className="navigation">
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
        <Link className="history" to="/history">
          Historial
        </Link>
      </nav>

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
