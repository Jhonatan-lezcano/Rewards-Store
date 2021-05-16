import React from "react";
import ReactTooltip from "react-tooltip";
import { FooterContainer } from "./footerStyles";
import Github from "../../assets/icons/github-sign.svg";
import Linkedin from "../../assets/icons/linkedin-sign.svg";

const Footer = () => {
  const redirectGithub = () => {
    window.open("https://github.com/Jhonatan-lezcano");
  };

  const redirectLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/jhonatan-lezcano-s%C3%A1nchez-b0a7631a9/"
    );
  };

  return (
    <FooterContainer>
      <p>
        Desarrollado por <strong>Jhonatan Lezcano</strong> | Copyright &#174;
        2021
      </p>
      <div className="networks">
        <img
          src={Github}
          alt="github"
          onClick={redirectGithub}
          data-tip="GitHub"
        />
        <ReactTooltip place="top" effect="solid" />
        <img
          src={Linkedin}
          alt="linkedin"
          onClick={redirectLinkedin}
          data-tip="LinkedIn"
        />
        <ReactTooltip place="top" effect="solid" />
      </div>
    </FooterContainer>
  );
};

export default Footer;
