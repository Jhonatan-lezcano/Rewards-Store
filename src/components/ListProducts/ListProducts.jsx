import React, { useContext } from "react";
import Product from "../Product/Product";
import { ContainerProducts, InfoPaginator } from "./stylesListProducts";
import { Line } from "../Filters/stylesFilters";
import { ProductsContext } from "../../context/ProductsContext";

const ListProducts = () => {
  const { products } = useContext(ProductsContext);
  console.log(products);

  return (
    <div>
      <ContainerProducts>
        {products.map((product) => {
          return <Product key={product._id} info={product} />;
        })}
      </ContainerProducts>

      <InfoPaginator>
        <p className="infoPag">16 of 32 products</p>
        <Line></Line>
      </InfoPaginator>
    </div>
  );
};

export default ListProducts;
