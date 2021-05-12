import React, { useContext } from "react";
import Product from "../Product/Product";
import {
  ContainerProducts,
  InfoPaginator,
  ModalBuys,
} from "./stylesListProducts";
import { Line } from "../Filters/stylesFilters";
import { ProductsContext } from "../../context/ProductsContext";
import arrowLeft from "../../assets/icons/arrow-left.svg";
import arrowRight from "../../assets/icons/arrow-right.svg";
import { PaginationContext } from "../../context/PaginationContext";

const ListProducts = () => {
  const { products, modal } = useContext(ProductsContext);
  const {
    pagesVisited,
    productsPerPage,
    changePageNext,
    changePagePrevious,
    pageNumber,
  } = useContext(PaginationContext);

  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product) => {
      return <Product key={product._id} info={product} />;
    });

  // const pageCount = Math.ceil(products.length / productsPerPage);

  return (
    <div>
      <ContainerProducts>{displayProducts}</ContainerProducts>

      <InfoPaginator>
        <div className="container-Pag">
          <p className="infoPag">16 of 32 products</p>
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
        </div>
        <Line></Line>
      </InfoPaginator>
      {modal && (
        <ModalBuys>
          <p>La compra a sido exitosa</p>
        </ModalBuys>
      )}
    </div>
  );
};

export default ListProducts;
