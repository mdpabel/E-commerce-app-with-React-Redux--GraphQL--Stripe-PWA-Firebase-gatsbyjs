import React from "react";

import Featured from "../../components/FeaturedSection/Featured";
import DealsAndOffer from "../../components/DealsAndOffer/DealsAndOffer";

const Home = ({ match }) => {
  return (
    <>
      <Featured />
      <DealsAndOffer />
    </>
  );
};

export default Home;
