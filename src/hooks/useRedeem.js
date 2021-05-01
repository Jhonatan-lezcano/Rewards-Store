import { useContext, useEffect } from "react";
import { getRedeem } from "../services/services";
import { ProductsContext } from "../context/ProductsContext";

// const apiURL = `https://coding-challenge-api.aerolab.co/redeem`;

export const useRedeem = (id) => {
  const { setModal } = useContext(ProductsContext);

  useEffect(() => {
    if (id !== "") {
      getRedeem(id);
      setModal(true);
    } else {
      setModal(false);
    }
  }, [id, setModal]);
};
