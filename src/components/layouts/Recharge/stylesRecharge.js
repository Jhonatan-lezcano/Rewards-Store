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

export const Play = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 40px;

  .header {
    background: #f0efeb;
    min-width: 300px;
    max-width: 800px;
    width: 70%;
    padding: 10px;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5);
    margin-bottom: 5px;
    border-radius: 5px;

    .category {
      opacity: 0.4;
      text-align: left;
    }

    .question {
      padding: 10px;
      font-size: 18px;
    }

    .image {
      object-fit: cover;
      height: 250px;
      width: 100%;
    }
  }

  .btn {
    background: white;
    width: 60%;
    max-width: 725px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;
    transition: all 0.5s ease;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5);
    border-radius: 5px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  border: none;
  background: lightblue;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s ease;

  &:hover {
    background: lightgray;
    color: #fff;
  }
`;
