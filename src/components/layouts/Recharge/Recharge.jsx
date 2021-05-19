import React, { useEffect, useState } from "react";
import { BannerRt } from "../History/stylesHistory";
import { Rules, Button, InfoModal } from "./stylesRecharge";
import { useLocation } from "react-router-dom";
import { Line } from "../../Filters/stylesFilters";
import Modal from "../../Modals/Modal";
import AnimationModal from "../../Animations/AnimationModal";
import AnimationModalSad from "../../Animations/AnimationModalSad";
import Game from "../../Game/Game";
import { setPoints } from "../../../services/services";
// import UserContext from '../../../context/UserContext'

const Recharge = () => {
  const [ejecutarEfecto, setEjecutarEfecto] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState(false);
  const [amount, setAmount] = useState(0);
  const { pathname } = useLocation();
  const POINTS_5Q = 7500;
  const POINTS_4Q = 5000;
  const POINTS_2_3Q = 1000;
  const POINTS_0_1Q = 0;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if (countCorrect === 5) {
      setAmount(POINTS_5Q);
    } else if (countCorrect === 4) {
      setAmount(POINTS_4Q);
    } else if (countCorrect === 2 || countCorrect === 3) {
      setAmount(POINTS_2_3Q);
    } else {
      setAmount(POINTS_0_1Q);
    }
  }, [countCorrect]);

  const toggle = () => {
    setActive(!active);
    setPoints(amount);
    setTimeout(() => {
      setCountCorrect(0);
    }, 1000);
  };

  const handlePlay = () => {
    setDisplay(!display);
    setEjecutarEfecto(true);
  };

  const handlePoints = () => {
    if (countCorrect === 5) {
      return POINTS_5Q;
    } else if (countCorrect === 4) {
      return POINTS_4Q;
    } else if (countCorrect === 2 || countCorrect === 3) {
      return POINTS_2_3Q;
    } else {
      return POINTS_0_1Q;
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
