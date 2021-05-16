import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ErrorAnimation from "../../Animations/ErrorAnimation";

const ContainerAni = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .btn-home {
    width: 200px;
    height: 45px;
    text-decoration: none;
    border-radius: 20px;
    background: #3a0ca3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 20px;
    transition: background 0.4s ease;
    cursor: pointer;

    &:hover {
      background: #4361ee;
    }
  }
`;

const Error = () => {
  return (
    <ContainerAni>
      <ErrorAnimation />
      <Link to="/" className="btn-home">
        Go home
      </Link>
    </ContainerAni>
  );
};

export default Error;
