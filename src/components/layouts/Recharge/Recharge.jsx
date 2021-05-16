import React, { useEffect, useState } from "react";
import { BannerRt } from "../History/stylesHistory";
import { Play, Rules, Button, InfoModal } from "./stylesRecharge";
import { data_questions } from "../../../data-questions";
import { useLocation } from "react-router-dom";
import { Line } from "../../Filters/stylesFilters";
import Modal from "../../Modals/Modal";
import AnimationModal from "../../Animations/AnimationModal";
import AnimationModalSad from "../../Animations/AnimationModalSad";

const Recharge = () => {
  const [posiblesRespuestas, setPosiblesRespuestas] = useState([]);
  const [pregunta, setPregunta] = useState([]);
  const [ejecutarEfecto, setEjecutarEfecto] = useState(false);
  const [countCorrect, setCountCorrect] = useState(0);
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggle = () => {
    setActive(!active);
    setCountCorrect(0);
  };

  const select_id = (id) => {
    return document.getElementById(id);
  };

  const style = (id) => {
    return select_id(id).style;
  };

  let btns = [
    select_id("btn1"),
    select_id("btn2"),
    select_id("btn3"),
    select_id("btn4"),
  ];

  const handlePlay = () => {
    console.log("me hicieron click");
    setDisplay(!display);
    setEjecutarEfecto(true);
  };
  console.log(display);
  console.log(ejecutarEfecto);

  useEffect(() => {
    if (questionCounter <= 4) {
      if (ejecutarEfecto === true && display) {
        const escogerPreguntaAleatoria = () => {
          escogerPregunta(Math.floor(Math.random() * data_questions.length));
        };

        const escogerPregunta = (n) => {
          let pregunta = data_questions[n];
          setPregunta(pregunta);
          select_id("category").innerHTML = pregunta.categoria;
          select_id("question").innerHTML = pregunta.pregunta;
          select_id("image").setAttribute("src", pregunta.imagen);
          style("image").objectFit = pregunta.object_fit;
          desordenarRespuestas(pregunta);
          if (pregunta.imagen) {
            style("image").height = "200px";
            style("image").width = "100%";
            style("image").visibility = "visible";
          } else {
            style("image").height = "0px";
            style("image").width = "0px";
            style("image").visibility = "hidden";
          }
        };

        const desordenarRespuestas = (pregunta) => {
          let posiblesRespuestas = [
            pregunta.respuesta,
            pregunta.incorrecta1,
            pregunta.incorrecta2,
            pregunta.incorrecta3,
          ];
          posiblesRespuestas.sort(() => Math.random() - 0.5);

          select_id("btn1").innerHTML = posiblesRespuestas[0];
          select_id("btn2").innerHTML = posiblesRespuestas[1];
          select_id("btn3").innerHTML = posiblesRespuestas[2];
          select_id("btn4").innerHTML = posiblesRespuestas[3];

          setPosiblesRespuestas(posiblesRespuestas);
        };

        escogerPreguntaAleatoria();
      }
    } else {
      setQuestionCounter(0);
      setDisplay(false);
      setEjecutarEfecto(false);
      setActive(true);
    }
  }, [ejecutarEfecto, display]);

  const handleResponse = (i) => {
    setQuestionCounter(questionCounter + 1);
    if (posiblesRespuestas[i] === pregunta.respuesta) {
      btns[i].style.background = "lightgreen";
      setCountCorrect(countCorrect + 1);
    } else {
      btns[i].style.background = "pink";
    }

    for (let j = 0; j < 4; j++) {
      if (posiblesRespuestas[j] === pregunta.respuesta) {
        btns[j].style.background = "lightgreen";
        break;
      }
    }
    setTimeout(() => {
      restart();
      setEjecutarEfecto(false);
      setEjecutarEfecto(true);
    }, 2000);
  };

  const restart = () => {
    btns.forEach((btn) => {
      btn.style.background = "white";
    });
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

  console.log(countCorrect);
  console.log(questionCounter);

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
        <Play>
          <div className="header">
            <div className="category-count">
              <div className="category" id="category">
                category
              </div>
              <p className="category">
                {countCorrect}/{questionCounter}
              </p>
            </div>

            <div className="question" id="question">
              question
            </div>
            <img className="image " src="" id="image" />
          </div>

          <div
            className="btn"
            id="btn1"
            onClick={() => handleResponse(0)}
          ></div>
          <div
            className="btn"
            id="btn2"
            onClick={() => handleResponse(1)}
          ></div>
          <div
            className="btn"
            id="btn3"
            onClick={() => handleResponse(2)}
          ></div>
          <div
            className="btn"
            id="btn4"
            onClick={() => handleResponse(3)}
          ></div>
        </Play>
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
