import styled from "styled-components";

export const Rules = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;

  .title-points {
    font-size: 32px;
    margin-bottom: 20px;
  }

  .rules {
    font-size: 24px;
    margin: 15px 0;
  }

  p {
    width: 40%;
    font-size: 18px;
    text-align: center;
    margin-bottom: 5px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  border: none;
  background: #4361ee;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s ease;
  color: #fff;

  &:hover {
    background: #4895ef;
  }
`;

export const InfoModal = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cont-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-family: "Newsreader", serif;
    }
  }

  .line {
    border: 1px solid #76c893;
    width: 50%;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
  }

  .btn-aceptar {
    height: 45px;
    width: 150px;
    border: none;
    border-radius: 15px;
    color: white;
    background: #76c893;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.5s ease;
    margin: 20px 0;

    &:hover {
      background: #40916c;
    }
  }
`;
