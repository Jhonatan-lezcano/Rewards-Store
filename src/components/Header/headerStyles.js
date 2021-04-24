import styled from "styled-components";

export const Container = styled.div`
  height: 79px;
  padding: 0 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 38px;
    height: 38px;
  }

  div {
    display: flex;
    font-size: 20px;
    width: 16%;
    justify-content: center;
    align-items: center;

    div {
      margin-left: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ededed;
      width: 45%;
      border-radius: 20px;

      img {
        margin-left: 5px;
        width: 24px;
      }
    }
  }
`;
