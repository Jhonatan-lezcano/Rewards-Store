import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";

const AnimationModalSad = () => {
  const animation = useRef(null);
  const Animation = styled.div`
    width: 200px;
  `;

  useEffect(() => {
    lottie.loadAnimation({
      container: animation.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lotties/sad-empty-box.json"),
    });
  }, []);

  return <Animation ref={animation}></Animation>;
};

export default AnimationModalSad;
