import styled from "styled-components";

export const ContainerFilters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 90px 10px 85px;
  font-size: 18px;
  .filters {
    display: flex;
    align-items: center;

    .btn-clean-up {
      height: 40px;
      width: 100px;
      border: none;
      border-radius: 5px;
      background: rgba(37, 187, 241, 0.86);
      color: #fff;
      font-size: 18px;
      margin-left: 24px;
      transition: 0.5s ease;
      cursor: pointer;

      &:hover {
        background: rgb(150, 172, 183);
      }
    }

    p {
      color: #a3a3a3;
    }
  }

  .buttons {
    height: 45px;
    display: flex;

    button {
      border: none;
      background: none;
      margin-left: 10px;
      border-radius: 20px;
    }

    img {
      height: 100%;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

export const SelectCustom = styled.select`
  height: 40px;
  border-radius: 15px;
  width: 170px;
  background: #ededed;
  border: none;
  margin-left: 24px;
  padding-left: 15px;
  font-size: 16px;
  outline: none;
`;

export const Line = styled.div`
  border-top: 1px solid #d9d9d9;
  width: 87%;
  margin-left: 85px;
`;
