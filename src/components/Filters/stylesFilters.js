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

    p {
      color: #a3a3a3;
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
