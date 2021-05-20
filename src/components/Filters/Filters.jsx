import React, { useContext } from "react";
import { ContainerFilters, Line, SelectCustom } from "./stylesFilters";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { PaginationContext } from "../../context/PaginationContext";
import { ProductsContext } from "../../context/ProductsContext";

const Filters = () => {
  const { changePageNext, changePagePrevious, pageNumber } =
    useContext(PaginationContext);
  const { handleCategory, category, limpiarLista, price, handlePrice } =
    useContext(ProductsContext);

  console.log(price);

  return (
    <div className="container-filter">
      <ContainerFilters>
        <p>16 of 32 products</p>
        <div className="filters">
          <p>Sort by:</p>
          <SelectCustom value={price} onChange={handlePrice}>
            <option value="all" disabled>
              Todos los precios
            </option>
            <option value="highest">De mayor a menor</option>
            <option value="lowest">De menor a mayor</option>
          </SelectCustom>
          <SelectCustom value={category} onChange={handleCategory}>
            <option value="all" disabled>
              Todos las categorias
            </option>
            <option value="Laptops">Laptops</option>
            <option value="Cameras">Cameras</option>
            <option value="Smart Home">Smart Home</option>
            <option value="Audio">Audio</option>
            <option value="Monitors & TV">Monitors & TV</option>
            <option value="PC Accessories">PC Accessories</option>
            <option value="Gaming">Gaming</option>
            <option value="Tablets & E-readers">Tablets & E-readers</option>
            <option value="Phones">Phones</option>
            <option value="Drones">Drones </option>
            <option value="Phone Accessories">Phone Accessories</option>
          </SelectCustom>
          <button className="btn-clean-up" onClick={limpiarLista}>
            Limpiar
          </button>
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
