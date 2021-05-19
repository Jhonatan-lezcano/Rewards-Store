import styled from "styled-components";

export const Container = styled.div`
  height: 79px;
  padding: 0 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .navigation {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 15px;
      transition: all 0.4s ease;

      &:hover {
        transform: scale(1.1);
      }
    }

    .links {
      display: flex;
      align-items: center;
      text-decoration: none;
      font-size: 18px;
      height: 100%;
      border-bottom: 4px solid transparent;
      margin-right: 15px;
      transition: all 0.4s ease;

      &:hover {
        color: rgba(37, 187, 241, 0.86);
        transform: scale(1.1);
      }
    }
  }

  div {
    display: flex;
    font-size: 20px;
    justify-content: center;
    align-items: center;

    div {
      margin-left: 27px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #ededed;
      border-radius: 20px;
      padding: 2px 8px;

      img {
        margin-left: 5px;
        width: 24px;
      }
    }
  }
`;
