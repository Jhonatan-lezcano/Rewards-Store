import styled from "styled-components";

export const ContainerProducts = styled.div`
  padding: 30px 85px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const InfoPaginator = styled.div`
  padding: 30px 0 0px 0;

  .container-Pag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 85px;

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
  }
`;

export const ModalBuys = styled.div`
  box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.5);
  width: 20%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 18px;
  position: fixed;
  bottom: 2%;
  left: 1%;
  background: white;
  border-radius: 5px;
  padding: 0 15px;
  img {
    width: 20px;
  }
`;
