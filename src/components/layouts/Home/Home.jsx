import React from "react";
import Banner from "../../Banner/Banner";
import Filters from "../../Filters/Filters";
import ListProducts from "../../ListProducts/ListProducts";

const Home = () => {
  return (
    <div className="animated fadeIn">
      <Banner />
      <Filters />
      <ListProducts />
    </div>
  );
};

export default Home;
