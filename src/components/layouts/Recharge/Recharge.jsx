import React, { useEffect, useState } from "react";
import { BannerRt } from "../History/stylesHistory";
import { Play, Rules, Button } from "./stylesRecharge";
import { data_questions } from "../../../data-questions";
import { useLocation } from "react-router-dom";

const Recharge = () => {
  const [posiblesRespuestas, setPosiblesRespuestas] = useState([]);
  const [pregunta, setPregunta] = useState([]);
  const [ejecutarEfecto, setEjecutarEfecto] = useState(false);
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);
  const [questionCounter, setQuestionCounter] = useState(0);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    // setEjecutarEfecto(true);
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
      setCount(0);
      setDisplay(false);
      setEjecutarEfecto(false);
    }
  }, [ejecutarEfecto, display]);

  const handleResponse = (i) => {
    setQuestionCounter(questionCounter + 1);
    if (posiblesRespuestas[i] === pregunta.respuesta) {
      btns[i].style.background = "lightgreen";
      setCount(count + 1);
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

  const styleHeader = () => {
    if (pregunta.categoria === "Historia") {
      return `header historia`;
    } else if (pregunta.categoria === "Matemática") {
      return `header matematicas`;
    } else {
      return `header`;
    }
  };

  console.log(styleHeader());
  console.log(count);
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
            <div className="category" id="category">
              category
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
    </div>
  );
};

export default Recharge;
