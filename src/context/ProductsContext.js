import React, { useState, useEffect } from "react";
import { getProducts } from "../services/services";

export const ProductsContext = React.createContext();

export const ProductsProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, [modal]);

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  const createList = () => {
    let newList = products
      .filter((product) => {
        if (category !== "all") {
          return product.category === category;
        }
        return product;
      })
      .sort((a, b) => {
        if (price !== "all") {
          if (price === "highest") {
            return b.cost - a.cost;
          } else if (price === "lowest") {
            return a.cost - b.cost;
          }
        }
        return 0;
      });

    return newList;
  };

  let filteredList = createList();

  const limpiarLista = () => {
    setCategory("all");
    setPrice("all");
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setModal,
        modal,
        category,
        handleCategory,
        filteredList,
        limpiarLista,
        price,
        handlePrice,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};
