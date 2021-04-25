import React from "react";
import Product from "../Product/Product";
import { ContainerProducts, InfoPaginator } from "./stylesListProducts";
import { Line } from "../Filters/stylesFilters";

const ListProducts = () => {
  return (
    <div>
      <ContainerProducts>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ContainerProducts>

      <InfoPaginator>
        <p className="infoPag">16 of 32 products</p>
        <Line></Line>
      </InfoPaginator>
    </div>
  );
};

export default ListProducts;
