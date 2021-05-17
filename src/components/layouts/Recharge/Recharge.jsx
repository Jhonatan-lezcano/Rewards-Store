import React, { useEffect, useState } from "react";
import { BannerRt } from "../History/stylesHistory";
import { Rules, Button, InfoModal } from "./stylesRecharge";

import { useLocation } from "react-router-dom";
import { Line } from "../../Filters/stylesFilters";
import Modal from "../../Modals/Modal";
import AnimationModal from "../../Animations/AnimationModal";
import AnimationModalSad from "../../Animations/AnimationModalSad";
import Game from "../../Game/Game";

const Recharge = () => {
  const [ejecutarEfecto, setEjecutarEfecto] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggle = () => {
    setActive(!active);
    setCountCorrect(0);
  };

  const handlePlay = () => {
    console.log("me hicieron click");
    setDisplay(!display);
    setEjecutarEfecto(true);
  };

  const handlePoints = () => {
    if (countCorrect === 5) {
      return `7.500`;
    } else if (countCorrect === 4) {
      return `5.000`;
    } else if (countCorrect === 2 || countCorrect === 3) {
      return `1.000`;
    } else {
      return `0`;
    }
  };

  return (
    <div className="containerRecharge">
      <BannerRt>
        <div className="message-container">
          <h1>Recarga puntos</h1>
          <p className="message">
            Para que puedas seguir disfrutando de nuestros productos :)
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
      <Rules>
        <h2 className="title-points">¿Como recargar puntos?</h2>
        <p>Para recargar puntos pondremos a prueba tus conocimientos.</p>
        <p>
          Te haremos un total de <strong>5</strong> preguntas, de acuerdo a el
          numero de preguntas que respondas de forma correcta es la cantidad de
          puntos que podras recargar.
        </p>
        <h3 className="rules">Reglas:</h3>

        <p>
          Si respondes <strong>5</strong> preguntas correctas, ganas{" "}
          <strong>7.500</strong> puntos 🤑🥳.
        </p>
        <p>
          Si respondes <strong>4</strong> preguntas correctas, ganas{" "}
          <strong>5.000</strong> puntos 😄.
        </p>
        <p>
          Si respondes entre <strong>2</strong> o <strong>3</strong> preguntas
          correctas, ganas <strong>1.000</strong> puntos 🙂.
        </p>
        <p>
          {" "}
          Si respondes entre <strong>0</strong> y <strong>1</strong> pregunta
          correcta, ganas <strong>0</strong> puntos 😟.
        </p>
      </Rules>

      {display ? (
        <Game
          ejecutarEfecto={ejecutarEfecto}
          setEjecutarEfecto={setEjecutarEfecto}
          countCorrect={countCorrect}
          setCountCorrect={setCountCorrect}
          display={display}
          setDisplay={setDisplay}
          setActive={setActive}
        />
      ) : (
        <div className="btn-empezar-juego">
          <Button onClick={handlePlay}>Empezar juego</Button>
        </div>
      )}
      <Line></Line>
      <Modal active={active} toggle={toggle}>
        <InfoModal>
          {countCorrect > 1 ? (
            <div className="cont-img">
              <AnimationModal />
              <h1>Felicitaciones 🤑🥳 </h1>
            </div>
          ) : (
            <div className="cont-img">
              <AnimationModalSad />
              <h1>Lo sentimos 😥</h1>
            </div>
          )}

          <div className="line"></div>
          <p>
            acabas de ganar <strong>{handlePoints()}</strong> puntos
          </p>
          <button onClick={toggle} className="btn-aceptar">
            Aceptar
          </button>
        </InfoModal>
      </Modal>
    </div>
  );
};

export default Recharge;
