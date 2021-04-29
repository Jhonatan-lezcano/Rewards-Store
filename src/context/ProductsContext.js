import React, { useState, useEffect } from "react";
import getProducts from "../services/getProducts";

export const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
