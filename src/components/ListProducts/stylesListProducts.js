import styled from "styled-components";

export const ContainerProducts = styled.div`
  padding: 30px 85px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const InfoPaginator = styled.div`
  padding: 30px 0;

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
