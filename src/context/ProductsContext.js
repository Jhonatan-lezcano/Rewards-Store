import React, { useState, useEffect } from "react";
import { getProducts } from "../services/services";

export const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    getProducts().then((products) => {
      console.log(modal);
      setProducts(products);
    });
  }, [modal]);

  return (
    <ProductsContext.Provider value={{ products, setModal, modal }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
