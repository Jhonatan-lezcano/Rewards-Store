import React from "react";
import { FooterContainer } from "./footerStyles";

const Footer = () => {
  const redirectGithub = () => {
    //window.location.assign("https://github.com/Jhonatan-lezcano");
    window.open("https://github.com/Jhonatan-lezcano");
  };

  const redirectLinkedin = () => {
    window.open(
      "https://www.linkedin.com/in/jhonatan-lezcano-s%C3%A1nchez-b0a7631a9/"
    );
    // window.location.assign(
    //   "https://www.linkedin.com/in/jhonatan-lezcano-s%C3%A1nchez-b0a7631a9/"
    // );
  };

  return (
    <FooterContainer>
      <p>
        Desarrollado por <strong>Jhonatan Lezcano</strong> | Copyright &#174;
        2021
      </p>
      <div className="networks">
        <img
          alt="github"
          onClick={redirectGithub}
          // data-tip="GitHub"
        />
        {/* <ReactTooltip place="top" type="light" effect="solid" /> */}
        <img
          alt="linkedin"
          onClick={redirectLinkedin}
          // data-tip="LinkedIn"
        />
        {/* <ReactTooltip place="top" type="light" effect="solid" /> */}
      </div>
    </FooterContainer>
  );
};

export default Footer;
