import React from "react";
import SearchSymbol from "../components/SearchSymbol";

import TableData from "../components/TableData";

const Home = () => {
  return (
    <div className="container">
      <SearchSymbol></SearchSymbol>
      <TableData />
    </div>
  );
};

export default Home;
