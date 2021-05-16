import React, { useRef, useEffect } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const ErrorAnimation = () => {
  const error = useRef(null);

  const Animation = styled.div`
    width: 35%;
  `;

  useEffect(() => {
    lottie.loadAnimation({
      container: error.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lotties/404-not-found-page.json"),
    });
  }, []);
  return <Animation ref={error}></Animation>;
};

export default ErrorAnimation;
