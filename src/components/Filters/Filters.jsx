import React from "react";
import { ContainerFilters, Line, SelectCustom } from "./stylesFilters";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";

const Filters = () => {
  return (
    <div className="container-filter">
      <ContainerFilters>
        <p>16 of 32 products</p>
        <div className="filters">
          <p>Sort by:</p>
          <SelectCustom name="" id="">
            <option value="all">Mas recientes</option>
          </SelectCustom>
          <SelectCustom name="" id="">
            <option value="">Todos los precios</option>
            <option value="">precio 1</option>
            <option value="">precio 2</option>
            <option value="">precio 3</option>
          </SelectCustom>
          <SelectCustom name="" id="">
            <option value="">todas las categorias</option>
            <option value="">categoria 1</option>
            <option value="">categoria 2</option>
            <option value="">categoria 3</option>
          </SelectCustom>
        </div>
        <div className="buttons">
          <img src={arrowLeft} alt="" />
          <img src={arrowRight} alt="" />
        </div>
      </ContainerFilters>
      <Line />
    </div>
  );
};

export default Filters;
