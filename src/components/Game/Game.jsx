import React, { useState, useEffect } from "react";
import { GameContainer } from "./stylesGame";
import { data_questions } from "../../data-questions";

const Game = ({
  ejecutarEfecto,
  setEjecutarEfecto,
  countCorrect,
  setCountCorrect,
  display,
  setDisplay,
  setActive,
}) => {
  const [posiblesRespuestas, setPosiblesRespuestas] = useState([]);
  const [pregunta, setPregunta] = useState([]);
  const [questionCounter, setQuestionCounter] = useState(0);

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

  return (
    <GameContainer>
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
        <img className="image " src="" id="image" alt="imagen" />
      </div>

      <div className="btn" id="btn1" onClick={() => handleResponse(0)}></div>
      <div className="btn" id="btn2" onClick={() => handleResponse(1)}></div>
      <div className="btn" id="btn3" onClick={() => handleResponse(2)}></div>
      <div className="btn" id="btn4" onClick={() => handleResponse(3)}></div>
    </GameContainer>
  );
};

export default Game;
