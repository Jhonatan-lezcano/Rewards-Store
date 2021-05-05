import React, { useContext } from "react";
import { ContainerFilters, Line, SelectCustom } from "./stylesFilters";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { PaginationContext } from "../../context/PaginationContext";

const Filters = () => {
  const { changePageNext, changePagePrevious, pageNumber } = useContext(
    PaginationContext
  );
  return (
    <div className="container-filter">
      <ContainerFilters>
        <p>16 of 32 products</p>
        <div className="filters">
          <p>Sort by:</p>
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
          <button className="btn-clean-up">Limpiar</button>
        </div>
        <div className="buttons">
          <button
            disabled={pageNumber === 0 ? true : false}
            onClick={changePagePrevious}
          >
            <img src={arrowLeft} alt="atras" />
          </button>
          <button
            disabled={pageNumber === 1 ? true : false}
            onClick={changePageNext}
          >
            <img src={arrowRight} alt="siguiente" />
          </button>
        </div>
      </ContainerFilters>
      <Line />
    </div>
  );
};

export default Filters;
