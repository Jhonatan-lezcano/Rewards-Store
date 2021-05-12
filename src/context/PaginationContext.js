import React, { useState } from "react";

export const PaginationContext = React.createContext();

export const PaginationProvider = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 16;
  const pagesVisited = pageNumber * productsPerPage;

  const changePageNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const changePagePrevious = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <PaginationContext.Provider
      value={{
        pagesVisited,
        productsPerPage,
        changePageNext,
        changePagePrevious,
        pageNumber,
      }}
    >
      {props.children}
    </PaginationContext.Provider>
  );
};
